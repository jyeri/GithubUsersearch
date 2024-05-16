import  { useEffect, useState } from 'react'

export const UseDebounce = (value:string, delay:number): string => {
  
    const [debouncedValue, setDebauncedValue] = useState<string>(value);

    useEffect( () => {
        if(value == ""){
            setDebauncedValue(value);
            return;
        }

        const timeout = setTimeout(() => {
            setDebauncedValue(value);
        },delay);

        return () => clearTimeout(timeout);
    },[value,delay]);

    return debouncedValue;
}