import './UserSearch.Styles.scss';
import { useUserSearch, UserSearchContext } from './UseUserSearch';
import { SearchResult } from '../ResultList/ResultListApp';
import { FetchError } from '../FetchError/FetchErrorApp';

export const UserSearch = () => {
    const { query, handleInputChange, UserData, error } = useUserSearch();

    return(
        <UserSearchContext.Provider value={{ UserData, query }}>
            <div className='search'>
                <div className='search__container'>
                    <input className='search__input' id='1' value={query} onChange={handleInputChange} placeholder='Try searching for Jyeri'/>
                </div>
                {error ? <FetchError error_msg={error}></FetchError> : <SearchResult />}
            </ div>
        </UserSearchContext.Provider>
    );
};