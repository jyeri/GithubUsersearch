import { useContext } from 'react';
import { QueryContext } from '../UserSearch/useUserSearch';
import { user } from "../../tools/interfaces"; // import the User interface

export function useSingleResult({ targetUser }: { targetUser: user }) {
  const query = useContext(QueryContext);
  const regex = new RegExp(`(${query})`, 'i');
  const match = targetUser.login.match(regex);

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