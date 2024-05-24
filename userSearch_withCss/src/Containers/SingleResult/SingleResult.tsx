import { TargetUser } from '../../Interfaces/Interfaces';
import { useSingleResult } from './useSingleResult';
import { SingleResultView } from '../../Presentational/SingleResultView';

export const SingleResult = ({ targetUser }: { targetUser: TargetUser }) => {
    // useSingleResult hook provides the functionality to highlight the matched text in the username
    const { beforeMatch, matchedText, afterMatch } = useSingleResult({ targetUser });

    return <SingleResultView targetUser={targetUser} beforeMatch={beforeMatch} matchedText={matchedText} afterMatch={afterMatch} />;
};