import { SearchResultProps } from '../../tools/Interfaces';
import { ResultContainer } from '../UserSearch/UserSearch.Styles';
import { SingleResult } from '../SingleResult/SingleResultApp';
import { Suggestion } from './ResultList.Styles';

export const SearchResult = ({Visible, UserData}: SearchResultProps) => {

    return Visible ? (
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
    ) : null;
};