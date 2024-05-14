import { UserData } from '../../tools/interfaces';
import { ResultContainer } from '../UserSearch/userSearch.styles';
import { SingleResult } from '../SingleResult/singleResultApp';

export const SearchResult = ({UserData}:UserData) => {

    return(
    <>
        <ResultContainer>
        {
            UserData?.map((item) => <SingleResult key={ item.id } targetUser={ item } />)
        }
        </ResultContainer>
    </>
    );
};