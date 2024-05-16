import { SearchContainer, SearchBar, ParentContainer } from './userSearch.styles';
import { useUserSearch, QueryContext } from './useUserSearch';
import { SearchResult } from '../SearchResult/SearchResultApp';
import { FetchError } from '../FetchError/FetchErrorApp';



export const UserSearch = () => {
    const { query, handleInputChange, UserData, error } = useUserSearch();

    return(
    <>
        <QueryContext.Provider value={query}>
            <ParentContainer>
                <SearchContainer>
                    <SearchBar value={query} onChange={handleInputChange} placeholder='Try searching for Jyeri'/>
                </SearchContainer>
                {error ? <FetchError error_msg={error}></FetchError> : <SearchResult UserData={UserData} visible={query.length > 0}/>}
            </ParentContainer>
        </QueryContext.Provider>
    </> 
    );
};
