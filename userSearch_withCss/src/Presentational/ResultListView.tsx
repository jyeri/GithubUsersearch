import React from 'react';
import '../Styles/ResultListView.scss';

interface IUserSearchViewProps {
    children: React.ReactNode;
}

export const ResultListView: React.FunctionComponent<IUserSearchViewProps> = ({
    children,
}) => (
    <div className='result-list' data-testid="cypress-list">
        {children}
    </div>
);