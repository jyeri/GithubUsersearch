import './FetchError.Styles.scss';
import { useFetchError } from './UseFetchError';

export const FetchError = ({error_msg}: {error_msg: string}) => {
    const { countdown, handleRetry } = useFetchError();

    return (
        <div className='error'>
            <h1>{error_msg}</h1>
            {countdown > 0 ? (
                <h1>Refresh button available in {countdown} seconds</h1>
            ) : (
                <button className='error__button' onClick={handleRetry}>Refresh </button>
            )}
        </div>
    );
};