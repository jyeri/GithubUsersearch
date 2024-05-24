import { useContext } from 'react';
import { UserData } from '../../Interfaces/Interfaces.ts'; // Import UserData
import { UserSearchContext } from '../../Providers/QueryContextProvider'; // Import UserSearchContext from QueryContextProvider
import { SingleResult } from '../SingleResult/SingleResult.tsx';
import { SuggestionView } from '../../Presentational/SuggestionView.tsx';
import { ResultListView } from '../../Presentational/ResultListView.tsx';

export const SearchResult = ({UserData}:UserData) => {
    // Use the UserSearchContext to access the search query
    const { query } = useContext(UserSearchContext);

    // Only render the component if a search query has been entered
    return query.length > 0 ? (
        <ResultListView>
        {
            // If user data exists, map over it and render a SingleResult component for each user
            UserData && UserData.length > 0 ? (
                    UserData.map((item) => <SingleResult key={ item.id } targetUser={ item } />)
                ) : (
                    <SuggestionView />
                )
        }
        </ ResultListView>
    ) : null;
};