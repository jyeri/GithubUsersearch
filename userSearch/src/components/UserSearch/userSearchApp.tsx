import { SearchContainer, SearchBar, ParentContainer } from './userSearch.styles';
import { useUserSearch } from './useUserSearch';
import { SearchResult } from '../SearchResult/SearchResultApp';



export const UserSearch = () => {
    const { query, handleInputChange, UserData } = useUserSearch();

    return(
    <>
        <ParentContainer>
            <SearchContainer>
                <SearchBar value={query} onChange={handleInputChange} placeholder='Try searching for Jyeri'/>
            </SearchContainer>
            <SearchResult UserData={UserData} />
        </ParentContainer>
    </> 
    );
};
