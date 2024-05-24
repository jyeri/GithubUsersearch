import { useState, useEffect } from 'react';

// useFetchError is a custom hook that provides a countdown and a retry availability state
export const useFetchError = (delay:number | null) => {
    const [countdown, setCountdown] = useState(delay || 45);
    const [retryAvailable, setRetryAvailable] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            // Decrease the countdown every second
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            // When the countdown reaches 0, set retryAvailable to true
            setRetryAvailable(true);
        }
    }, [countdown]);

    return { countdown, retryAvailable };
};
