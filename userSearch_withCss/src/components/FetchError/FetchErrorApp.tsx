import './FetchError.Styles.scss';
import { useFetchError } from './UseFetchError';

// This component displays an error message and a button to refresh the page
// Its done purely in learning purposes, in a real-world scenario, you would want to handle errors more gracefully, like re fetching the data and displaying a message to the user
// This renders buttons to refresh the page if the countdown is 0 and retryAvailable is true

export const FetchError = ({error_msg}: {error_msg: string}) => {
    const { countdown, retryAvailable } = useFetchError();

    return (
        <div className='error'>
            <h1>{error_msg}</h1>
            {countdown > 0 ? (
                <h1>Refresh button available in {countdown} seconds</h1>
            ) : (
                retryAvailable && <button className='error__button' onClick={() => window.location.reload()}>Refresh </button>
            )}
        </div>
    );
};