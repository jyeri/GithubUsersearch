import { useContext, useMemo } from 'react';
import { UserSearchContext } from '../UserSearch/UseUserSearch';
import { User } from "../tools/Interfaces";

export function useSingleResult({ targetUser }: { targetUser: User }) {
  const context = useContext(UserSearchContext);
  const query = context.query;

  const regex = useMemo(() => new RegExp(`(${query})`, 'i'), [query]);
  const match = useMemo(() => regex.exec(targetUser.login), [regex, targetUser.login]);

  let beforeMatch = '';
  let matchedText = '';
  let afterMatch = '';

  // If a match is found, we split the login into the parts before, during, and after the match
  if (match) {
    const matchIndex = match.index || 0;
    matchedText = match[0];
    beforeMatch = targetUser.login.slice(0, matchIndex);
    afterMatch = targetUser.login.slice(matchIndex + matchedText.length);
  }
  // If no match is found, the entire login is considered as "beforeMatch"
  // Helped with bugfixing.
  else {
    beforeMatch = targetUser.login;
  }

  return { beforeMatch, matchedText, afterMatch };
}