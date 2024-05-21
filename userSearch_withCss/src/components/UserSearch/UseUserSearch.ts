import { useEffect, useState, createContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { UseDebounce } from '../tools/UseDebounce';
import { User } from '../tools/Interfaces';
import { FetchUsers } from '../tools/FetchUsers';

// Create a context for the UserData and search query
export const UserSearchContext = createContext<{ UserData: User[], query: string }>({ UserData: [], query: '' });

export const useUserSearch = () => {
  // State variables for search query, user data, and any errors
  const [query, setQuery] = useState<string>("");
  const [UserData, setUserData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Debounce the search query to limit API calls
  const debouncedQuery = UseDebounce(query, 500);

  // URL for the GitHub users search API
  const URL = `https://api.github.com/search/users?q=${debouncedQuery}&per_page=15`;

  // Use react-query to fetch data from the API
  const { data: apiResponse, error: queryError } = useQuery<{ data?: { items: User[] }, error?: string }, Error>({
      queryKey: ['users', debouncedQuery],
      queryFn: () => FetchUsers<{ items: User[] }>(URL),
      enabled: !!debouncedQuery,
      retry: 1,
      staleTime: 1000 * 60,
    });
    
    // Update the user data or error state when the API response changes
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

  // Update the search query when the input field changes
  const handleInputChange = (e: { target: { value: string; }; }) => {
      setQuery(e.target.value);
  };

  return { query, UserData, handleInputChange, error };
}
