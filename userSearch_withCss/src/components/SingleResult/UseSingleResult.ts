import { useContext, useMemo } from 'react';
import { QueryContext } from '../UserSearch/UseUserSearch';
import { User } from "../tools/Interfaces";

// This hook is used to find and separate the parts of a user's login that match a search query.
export function useSingleResult({ targetUser }: { targetUser: User }) {
  const query = useContext(QueryContext);

  // We use a case-insensitive regex to find matches in the user's login
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