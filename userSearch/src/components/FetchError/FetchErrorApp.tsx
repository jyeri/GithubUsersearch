import { ErrorMessage, RetryButton } from './FetchError.Styles';
import { useFetchError } from './UseFetchError';

export const FetchError = ({error_msg}: {error_msg: string}) => {
    const { countdown, handleRetry } = useFetchError();

    return (
        <ErrorMessage>
            <h1>{error_msg}</h1>
            {countdown > 0 ? (
                <h1>Refresh button available in {countdown} seconds</h1>
            ) : (
                <RetryButton onClick={handleRetry}>Refresh</RetryButton>
            )}
        </ErrorMessage>
    );
};