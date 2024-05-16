import { TargetUser } from "../../tools/Interfaces";
import { useSingleResult } from "./UseSingleResult";
import { ResultContainer, ImgDiv, UserLogin, StyledLink, Highlight } from "./SingleResult.Styles";

export const SingleResult = ({ targetUser }: { targetUser: TargetUser }) => {
    const { beforeMatch, matchedText, afterMatch } = useSingleResult({ targetUser });
    return(
        <ResultContainer>
          <StyledLink href={targetUser.html_url} target="_blank" rel="noopener noreferrer">
          <ImgDiv>
            <img src={targetUser.avatar_url} alt={`${targetUser.login}'s avatar`}/>
          </ImgDiv>
          <UserLogin>
            <h1>
              {beforeMatch}
              <Highlight>{matchedText}</Highlight>
              {afterMatch}
            </h1>
          </UserLogin>
          </StyledLink>
        </ResultContainer>
    );
};