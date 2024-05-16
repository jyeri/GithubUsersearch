import { SearchContainer, SearchBar, ParentContainer } from './UserSearch.Styles';
import { useUserSearch, QueryContext } from './UseUserSearch';
import { SearchResult } from '../ResultList/ResultListApp';
import { FetchError } from '../FetchError/FetchErrorApp';



export const UserSearch = () => {
    const { query, handleInputChange, UserData, error } = useUserSearch();

    return(
        <QueryContext.Provider value={query}>
            <ParentContainer>
                <SearchContainer>
                    <SearchBar value={query} onChange={handleInputChange} placeholder='Try searching for Jyeri'/>
                </SearchContainer>
                {error ? <FetchError error_msg={error}></FetchError> : <SearchResult UserData={UserData} Visible={query.length > 0}/>}
            </ParentContainer>
        </QueryContext.Provider>
    );
};
