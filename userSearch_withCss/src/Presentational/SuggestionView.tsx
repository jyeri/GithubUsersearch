import React from 'react';
import '../Styles/ResultListView.scss';


export const SuggestionView: React.FunctionComponent = ( ) => (
    <div className='result-list__suggestion' data-testid="cypress-suggestion">
        <h1>No matches, check the spelling, or try searching for "Jyeri"</h1>
    </ div>
);