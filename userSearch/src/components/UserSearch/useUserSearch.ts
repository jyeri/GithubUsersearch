import { useEffect, useState, createContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from '../../tools/UseDebounce';
import { User } from '../../tools/Interfaces';
import { fetchUsers } from '../../tools/FetchUsers';

export const QueryContext = createContext('');

export const useUserSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [UserData, setUserData] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    const debouncedQuery = useDebounce(query, 500);
    const URL = `https://api.github.com/search/users?q=${debouncedQuery}&per_page=25`;

    const {
        data,
        error: queryError,
    } = useQuery({
        queryKey: ['users', debouncedQuery],
        queryFn: () => fetchUsers(URL),
        enabled: !!debouncedQuery,
        retry: 1,
    });

    useEffect(() => {
        if (data) {
            const res = data.items;
            const filteredRes = res.filter((item: User) => 
                item.login.toLowerCase().includes(debouncedQuery.toLowerCase()));
            setUserData(filteredRes);
            setError(null);
        }
        else if (queryError) {
            setError(queryError.message);
        }
    }, [data, debouncedQuery, queryError]);

    const handleInputChange = (e: { target: { value: string; }; }) => {
        setQuery(e.target.value);
    };

    return { query, UserData, handleInputChange, error };
}