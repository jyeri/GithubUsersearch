import { useContext } from 'react';
import { UserSearchContext } from '../../Providers/QueryContextProvider';
import { UserInputView } from '../../Presentational/UserInputView';

export const UserInput = () => {
    const { query, handleInputChange } = useContext(UserSearchContext);

    return <UserInputView query={query} handleInputChange={handleInputChange} />;
}