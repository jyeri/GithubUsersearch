import { useState, useEffect } from 'react';

export const useFetchError = () => {
    const [countdown, setCountdown] = useState(45);
    const [retryAvailable, setRetryAvailable] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setRetryAvailable(true);
        }
    }, [countdown]);

    return { countdown, retryAvailable };
};