import { useContext, useMemo } from 'react';
import { QueryContext } from '../UserSearch/UseUserSearch';
import { User } from "../../tools/Interfaces"; // import the User interface

export function useSingleResult({ targetUser }: { targetUser: User }) {
  const query = useContext(QueryContext);

  const regex = useMemo(() => new RegExp(`(${query})`, 'i'), [query]);

  const match = useMemo(() => regex.exec(targetUser.login), [regex, targetUser.login]);

  let beforeMatch = '';
  let matchedText = '';
  let afterMatch = '';

  if (match) {
    const matchIndex = match.index || 0;
    matchedText = match[0];
    beforeMatch = targetUser.login.slice(0, matchIndex);
    afterMatch = targetUser.login.slice(matchIndex + matchedText.length);
  }
  else {
    beforeMatch = targetUser.login;
  }

  return { beforeMatch, matchedText, afterMatch };
}