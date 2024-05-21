import  { useEffect, useState } from 'react'

// UseDebounce is a custom hook that delays the update of the value state variable
export const UseDebounce = (value:string, delay:number): string => {
    const [debouncedValue, setDebauncedValue] = useState<string>(value);

    useEffect( () => {
        // Immediate update for empty values
        if(value === ""){
            setDebauncedValue(value);
            return;
        }

        // Delayed update for non-empty values
        const timeout = setTimeout(() => {
            setDebauncedValue(value);
        },delay);

        // Cleanup function to prevent unnecessary state updates
        return () => clearTimeout(timeout);
    },[value,delay]); 

    return debouncedValue;
}
