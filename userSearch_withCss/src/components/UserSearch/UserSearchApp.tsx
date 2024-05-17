import './UserSearch.Styles.scss';
import { useUserSearch, QueryContext } from './UseUserSearch';
import { SearchResult } from '../ResultList/ResultListApp';
import { FetchError } from '../FetchError/FetchErrorApp';

export const UserSearch = () => {
    // Use the custom hook to get the current search query, the function to update the query, the list of users, and any error message.
    const { query, handleInputChange, UserData, error } = useUserSearch();

    return(
        /* Provide the current search query to any components that need it using the QueryContext.Provider.
           Render a SearchBar for input and display either a FetchError or SearchResult component based on the presence of an error. */
        <QueryContext.Provider value={query}>
            <div className='search'>
                <div className='search__container'>
                    <input className='search__input' value={query} onChange={handleInputChange} placeholder='Try searching for Jyeri'/>
                </div>
                {error ? <FetchError error_msg={error}></FetchError> : <SearchResult UserData={UserData} Visible={query.length > 0}/>}
            </ div>
        </QueryContext.Provider>
    );
};