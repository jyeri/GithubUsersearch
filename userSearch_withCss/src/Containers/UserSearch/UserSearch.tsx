import { useUserSearch } from './useUserSearch.ts';
import { UserSearchView } from '../../Presentational/UserSearchView.tsx';
import { SearchResult } from '../SearchResult/SearchResult.tsx';
import { FetchError } from '../ErrorHandling/FetchError.tsx';

export const UserSearch = () => {
    const { UserData, error } = useUserSearch();

    if (error) {
        return <FetchError error_msg={error} />;
    }

    else return (
        <UserSearchView>
            <SearchResult UserData={UserData} />
        </UserSearchView>
    );
};