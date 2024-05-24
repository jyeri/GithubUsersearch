import { useEffect, useState, useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { UseDebounce } from '../../Hooks/useDebounce';
import { User } from '../../Interfaces/Interfaces';
import { fetchUsers } from '../../Queries/fetchUsers';
import { UserSearchContext } from '../../Providers/QueryContextProvider';

export const useUserSearch = () => {
  const [UserData, setUserData] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { query } = useContext(UserSearchContext);

  const debouncedQuery = UseDebounce(query, 500);

  const URL = `https://api.github.com/search/users?q=${debouncedQuery}&per_page=15`;

  const { data: apiResponse, error: queryError } = useQuery<{ data?: { items: User[] }, error?: string }, Error>({
      queryKey: ['users', debouncedQuery],
      queryFn: () => fetchUsers<{ items: User[] }>(URL),
      enabled: !!debouncedQuery,
      retry: 1,
      staleTime: 1000 * 60,
    });

  useEffect(() => {
    if (debouncedQuery && apiResponse?.data?.items) {
      const filteredRes = apiResponse.data.items.filter((item: User) => 
        item.login.toLowerCase().includes(debouncedQuery.toLowerCase()));
      setUserData(filteredRes);
      setError(null);
    }
    else if (apiResponse?.error || queryError) {
      setError(apiResponse?.error || queryError?.message || null);
    }
  }, [apiResponse, debouncedQuery, queryError]);

  return { UserData, error };
}