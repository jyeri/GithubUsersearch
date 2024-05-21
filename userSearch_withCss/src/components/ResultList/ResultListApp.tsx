import { useContext } from 'react';
import { SingleResult } from '../SingleResult/SingleResultApp';
import { UserSearchContext } from '../UserSearch/UseUserSearch';
import './ResultList.Styles.scss';

export const SearchResult = ( ) => {
    const UserData = useContext(UserSearchContext);

    return UserData.query.length > 0 ? (
        <div className='result-list' data-testid="cypress-list">
        {
            UserData && UserData.UserData.length > 0 ? (
                    UserData.UserData.map((item) => <SingleResult key={ item.id } targetUser={ item } />)
                ) : (
                    <div className='result-list__suggestion' data-testid="cypress-suggestion">
                        <h1>No matches, check the spelling, or try searching for "Jyeri"</h1>
                    </ div>
                )
        }
        </div>
    ) : null;
};