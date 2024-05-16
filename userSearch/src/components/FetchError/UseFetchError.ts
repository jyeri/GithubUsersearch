import { useState, useEffect } from 'react';

export const useFetchError = () => {
    const [countdown, setCountdown] = useState(45);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    const handleRetry = () => {
        window.location.reload();
    };

    return { countdown, handleRetry };
};