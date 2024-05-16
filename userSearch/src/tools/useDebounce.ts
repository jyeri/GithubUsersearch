import  { useEffect, useState } from 'react'

// UseDebounce is a custom hook to delay the execution of functions to improve performance
export const UseDebounce = (value:string, delay:number): string => {
  
    const [debouncedValue, setDebauncedValue] = useState<string>(value);

    useEffect( () => {
        // Immediate update for empty values to ensure user sees immediate feedback
        if(value == ""){
            setDebauncedValue(value);
            return;
        }

        // Delayed update for non-empty values to limit the rate of state updates
        const timeout = setTimeout(() => {
            setDebauncedValue(value);
        },delay);

        // Cleanup function to prevent unnecessary state updates if value or delay changes
        return () => clearTimeout(timeout);
    },[value,delay]); 

    return debouncedValue;
}
