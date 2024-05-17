import { SearchResultProps } from '../tools/Interfaces';
import { SingleResult } from '../SingleResult/SingleResultApp';
import './ResultList.Styles.scss';

// SearchResult component displays the list of users matching the search query
export const SearchResult = ({Visible, UserData}: SearchResultProps) => {

    // Only render the component if it's set to be visible
    // This can be used to hide the component when there's no active search
    return Visible ? (
        <div className='result-list'>
        {
            /* If there are user data, map over them and render a SingleResult component for each
               If there's no user data, render a suggestion to check the spelling or try a different search */
            UserData && UserData.length > 0 ? (
                    UserData.map((item) => <SingleResult key={ item.id } targetUser={ item } />)
                ) : (
                    <div className='result-list__suggestion'>
                        <h1>No matches, check the spelling, or try searching for "Jyeri"</h1>
                    </ div>
                )
        }
        </div>
    ) : null;
};