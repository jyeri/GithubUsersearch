import { TargetUser } from "../tools/Interfaces";
import { useSingleResult } from "./UseSingleResult";
import "./SingleResult.Styles.scss";

export const SingleResult = ({ targetUser }: { targetUser: TargetUser }) => {
    const { beforeMatch, matchedText, afterMatch } = useSingleResult({ targetUser });
    return(
        <div className="single-result">
          <a className="single-result__link" href={targetUser.html_url} target="_blank" rel="noopener noreferrer">
            <div className="single-result__img-container">
              <img className="single-result__img" src={targetUser.avatar_url} alt={`${targetUser.login}'s avatar`}/>
            </div>
            <div className="single-result__username">
              <h1 className="single-result__username">
                {beforeMatch}<span className="single-result__username--highlight">{matchedText}</span>{afterMatch}
              </h1>
            </div>
          </a>
        </div>
    );
};