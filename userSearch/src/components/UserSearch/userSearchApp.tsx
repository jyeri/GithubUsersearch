import { SearchContainer, ResultContainer, SearchBar } from './userSearch.styles';
import { useUserSearch } from './useUserSearch';
//import { SearchResult } from '../SearchResult/SearchResultApp';



export const UserSearch = () => {
    const { query, handleInputChange, UserData } = useUserSearch();

    return(
    <>
        <SearchContainer>
            <SearchBar value={query} onChange={handleInputChange} placeholder='Try searching for Jyeri'/>
        </SearchContainer>
    </>
    );
};
