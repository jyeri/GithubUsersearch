import { useEffect, useState, SetStateAction } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from '../../tools/useDebounce';
import { user } from '../../tools/interfaces';
import { fetchUsers } from '../../tools/fetchUsers';

export const useUserSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [UserData, setUserData] = useState<user[]>([]);
    const debouncedQuery = useDebounce(query, 250);
    const URL = `https://api.github.com/search/users?q=${debouncedQuery}&per_page=25`;

    const { data } = useQuery({
        queryKey: ['users', debouncedQuery],
        queryFn: () => fetchUsers(URL),
        enabled: !!debouncedQuery,
    });

    useEffect(() => {
        if (data) {
            const res = data.items;
            const filteredRes = res.filter((item: user) => item.login.includes(debouncedQuery));
            setUserData(filteredRes);
        }
    }, [data, debouncedQuery]);

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setQuery(e.target.value);
    };

    return { query, UserData, handleInputChange };
}