import { useState } from "react";

export const useUserInput = () => {
    const [query, setQuery] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    
    return { query, handleInputChange };
}