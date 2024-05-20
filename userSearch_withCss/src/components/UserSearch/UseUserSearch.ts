import { useEffect, useState, createContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { UseDebounce } from '../tools/UseDebounce';
import { User } from '../tools/Interfaces';
import { FetchUsers } from '../tools/FetchUsers';

// Create a context for the UserData
export const UserSearchContext = createContext<{ UserData: User[], query: string }>({ UserData: [], query: '' });


export const useUserSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [UserData, setUserData] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Debouncing is used to limit the rate of API calls
    const debouncedQuery = UseDebounce(query, 500);

    const URL = `https://api.github.com/search/users?q=${debouncedQuery}&per_page=15`;

    // This doesn't create an unnamed const, but rather two named consts: apiResponse and queryError.
    const { data: apiResponse, error: queryError } = useQuery<{ data?: { items: User[] }, error?: string }, Error>({
        queryKey: ['users', debouncedQuery],
        queryFn: () => FetchUsers<{ items: User[] }>(URL),
        enabled: !!debouncedQuery,
        retry: 1,
        staleTime: 1000 * 60,
      });
      
      useEffect(() => {
        if (apiResponse?.data?.items) {
          const filteredRes = apiResponse.data.items.filter((item: User) => 
            item.login.toLowerCase().includes(debouncedQuery.toLowerCase()));
          setUserData(filteredRes);
          setError(null);
        }
        else if (apiResponse?.error || queryError) {
          setError(apiResponse?.error || queryError?.message || null);
        }
      }, [apiResponse, debouncedQuery, queryError]);

    const handleInputChange = (e: { target: { value: string; }; }) => {
        setQuery(e.target.value);
    };

    return { query, UserData, handleInputChange, error };
}