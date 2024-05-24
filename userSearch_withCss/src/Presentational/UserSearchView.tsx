import React from 'react';
import '../Styles/UserSearchView.scss';

interface IUserSearchViewProps {
    children: React.ReactNode;
}

export const UserSearchView: React.FunctionComponent<IUserSearchViewProps> = ({
    children,
}) => (
    <div className='search'>
        {children}
    </div>
);