import { useContext } from 'react';
import { UserSearchContext } from '../../Providers/QueryContextProvider';
import { UserInputView } from '../../Presentational/UserInputView';

export const UserInput = () => {
    const { query, handleInputChange } = useContext(UserSearchContext);

    return <UserInputView id="user-input" query={query} handleInputChange={handleInputChange} placeholder='Try searching for Jyeri' />;
}