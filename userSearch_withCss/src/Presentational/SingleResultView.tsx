import React from 'react';
import '../Styles/SingleResultView.scss';
import { TargetUser } from '../Interfaces/Interfaces';

interface ISingleResultViewProps {
    targetUser: TargetUser;
    beforeMatch: string;
    matchedText: string;
    afterMatch: string;
}

export const SingleResultView: React.FunctionComponent<ISingleResultViewProps> = ({
    targetUser,
    beforeMatch,
    matchedText,
    afterMatch,
}) => (
    <div className="single-result" data-testid="cypress-resultElem" data-testidunique={`${targetUser.login}-element`}>
        <a className="single-result__link" data-testidunique={`${targetUser.login}-link`} href={targetUser.html_url} target="_blank" rel="noopener noreferrer">
            <div className="single-result__img-container" data-testidunique={`${targetUser.login}-img-container`}>
                <img className="single-result__img" src={targetUser.avatar_url} alt={`${targetUser.login}'s avatar`} data-testidunique={`${targetUser.login}-img`}/>
            </div>
            <div className="single-result__username" data-testidunique={`${targetUser.login}-username-container`}>
                <h1 className="single-result__username" data-testidunique={`${targetUser.login}-username-text`}>
                    {/* Highlight the matched text in the username */}
                    {beforeMatch}<span className="single-result__username--highlight">{matchedText}</span>{afterMatch}
                </h1>
            </div>
        </a>
    </div>
);