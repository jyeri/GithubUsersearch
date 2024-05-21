import './FetchError.Styles.scss';
import { useFetchError } from './UseFetchError';

// FetchError component displays an error message and a button to refresh the page
// It renders a button to refresh the page if the countdown is 0 and retryAvailable is true
// This is done just to practice, it is no way best way to handle errors, and it is not recommended to refresh the page on error
export const FetchError = ({error_msg}: {error_msg: string}) => {
    const { countdown, retryAvailable } = useFetchError();

    return (
        <div className='error' data-testid="cypress-error">
            <h1>{error_msg}</h1>
            {countdown > 0 ? (
                <h1>Refresh button available in {countdown} seconds</h1>
            ) : (
                retryAvailable && <button className='error__button' aria-label='refresh' onClick={() => window.location.reload()}>Refresh </button>
            )}
        </div>
    );
};
