import { targetUser } from "../../tools/interfaces";
import { useSingleResult } from "./useSingleResult";
import { ResultContainer, ImgDiv, UserLogin, StyledLink } from "./singleResult.styles";

export const SingleResult = ({ targetUser }:targetUser ) => {
//    const { handleClick } = useSingleResult({ targetUser });
    return(
    <>
        <ResultContainer>
            <StyledLink href={targetUser.html_url}>
            <ImgDiv>
                <img src={targetUser.avatar_url} alt='User Avatar'/>
            </ImgDiv>
            <UserLogin>
                <h1>{targetUser.login}</h1>
            </UserLogin>
            </StyledLink>
        </ResultContainer>
    </>
    );
};