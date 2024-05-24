import React from 'react';
import '../Styles/UserInputView.scss';

interface IUserInputViewProps {
    query: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserInputView: React.FunctionComponent<IUserInputViewProps> = ({
    query,
    handleInputChange
}) => (
    <div className='search__container'>
        <input data-testid="cypress-input" className='search__input' id={query} value={query} onChange={handleInputChange} placeholder='Try searching for Jyeri'/>
    </div>
);