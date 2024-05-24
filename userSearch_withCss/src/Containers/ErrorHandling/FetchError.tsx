import { useFetchError } from './useFetchError';
import { FetchErrorView } from '../../Presentational/FetchErrorView';

export const FetchError = ({error_msg}: {error_msg: string}) => {
    const { countdown, retryAvailable } = useFetchError();

    return <FetchErrorView error_msg={error_msg} countdown={countdown} retryAvailable={retryAvailable} />;
};