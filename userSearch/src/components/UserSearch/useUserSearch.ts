import { useEffect, useState, SetStateAction } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from '../../tools/useDebounce'; // Import the useDebounce hook
import { user } from '../../tools/interfaces'; // Import the user interface
import { fetchUsers } from '../../tools/fetchUsers'; // import the fetchUsers function

export const useUserSearch = () => {
    const [query, setQuery] = useState<string>(""); // Set initial query state to empty string
    const [UserData, setUserData] = useState<user[]>([]); // Set initial user data state to empty array
    const debouncedQuery = useDebounce(query, 250); // Debounce the query value
    const URL = `https://api.github.com/search/users?q=${debouncedQuery}&per_page=15`;

    const { data } = useQuery({
        queryFn: () => fetchUsers(URL),
        queryKey: ['users'],
        enabled: !!debouncedQuery,
    });

    useEffect(() => {
        if (debouncedQuery) {
            fetchUsers(URL);
          }
        if (data) {
            const res = data.items;
            setUserData([...new Set([...res])]);
        }
        if (!data) {
            console.log("No data found");
        }
    }, [data, debouncedQuery]);

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setQuery(e.target.value);
    };

    return { query, handleInputChange, UserData };
}