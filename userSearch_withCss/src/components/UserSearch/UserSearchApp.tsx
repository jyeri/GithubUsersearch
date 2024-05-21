import './UserSearch.Styles.scss';
import { useUserSearch, UserSearchContext } from './UseUserSearch';
import { SearchResult } from '../ResultList/ResultListApp';
import { FetchError } from '../FetchError/FetchErrorApp';

export const UserSearch = () => {
    // useUserSearch hook provides the search functionality
    const { query, handleInputChange, UserData, error } = useUserSearch();

    return(
        // UserSearchContext.Provider allows child components to access the user data and search query
        <UserSearchContext.Provider value={{ UserData, query }}>
            <div className='search'>
                <div className='search__container'>
                    {/* Input field for user to enter search query */}
                    <input data-testid="cypress-input" className='search__input' id={query} value={query} onChange={handleInputChange} placeholder='Try searching for Jyeri'/>
                </div>
                {/* Display error message if there's an error, otherwise display search results */}
                {error ? <FetchError error_msg={error}></FetchError> : <SearchResult />}
            </ div>
        </UserSearchContext.Provider>
    );
};
