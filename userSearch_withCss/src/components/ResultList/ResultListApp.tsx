import { useContext } from 'react';
import { SingleResult } from '../SingleResult/SingleResultApp';
import { UserSearchContext } from '../UserSearch/UseUserSearch';
import './ResultList.Styles.scss';

export const SearchResult = () => {
    // Use the UserSearchContext to access the user data and search query
    const UserData = useContext(UserSearchContext);

    // Only render the component if a search query has been entered
    return UserData.query.length > 0 ? (
        <div className='result-list' data-testid="cypress-list">
        {
            // If user data exists, map over it and render a SingleResult component for each user
            UserData && UserData.UserData.length > 0 ? (
                    UserData.UserData.map((item) => <SingleResult key={ item.id } targetUser={ item } />)
                ) : (
                    // If no user data exists, render a suggestion for the user
                    <div className='result-list__suggestion' data-testid="cypress-suggestion">
                        <h1>No matches, check the spelling, or try searching for "Jyeri"</h1>
                    </ div>
                )
        }
        </div>
    ) : null;
};
