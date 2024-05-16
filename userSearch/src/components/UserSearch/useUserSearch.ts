import { useEffect, useState, SetStateAction, createContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from '../../tools/useDebounce';
import { user } from '../../tools/interfaces';
import { fetchUsers } from '../../tools/fetchUsers';

export const QueryContext = createContext('');

export const useUserSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [UserData, setUserData] = useState<user[]>([]);
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
        retry: 0,
    });

    useEffect(() => {
        if (data) {
            const res = data.items;
            const filteredRes = res.filter((item: user) => item.login.includes(debouncedQuery));
            setUserData(filteredRes);
            setError(null);
        }
        else if (queryError) {
            setError(queryError.message);
        }
    }, [data, debouncedQuery, queryError]);

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setQuery(e.target.value);
    };

    return { query, UserData, handleInputChange, error };
}