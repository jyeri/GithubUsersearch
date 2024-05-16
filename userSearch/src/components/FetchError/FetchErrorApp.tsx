import { ErrorMessage } from './FetchError.Styles';

export const FetchError = ({error_msg}: {error_msg: string}) => (
    <ErrorMessage>
        <h1>{error_msg}</h1>
    </ErrorMessage>
);