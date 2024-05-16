import { SearchResultProps } from '../../tools/interfaces';
import { ResultContainer } from '../UserSearch/userSearch.styles';
import { SingleResult } from '../SingleResult/singleResultApp';
import { Suggestion } from './SearchResult.styles';

export const SearchResult = ({visible, UserData}: SearchResultProps) => {

    return visible ? (
    <>
        <ResultContainer>
        {
            UserData && UserData.length > 0 ? (
                    UserData.map((item) => <SingleResult key={ item.id } targetUser={ item } />)
                ) : (
                    <Suggestion>
                        <h1>No matches, check the spelling, or try searching for "Jyeri"</h1>
                    </Suggestion>
                )
        }
        </ResultContainer>
    </>
    ) : null;
};