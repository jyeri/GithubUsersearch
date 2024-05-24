import React from 'react';
import '../Styles/FetchErrorView.scss';

interface IFetchErrorViewProps {
    error_msg: string;
    countdown: number;
    retryAvailable: boolean;
}

export const FetchErrorView: React.FunctionComponent<IFetchErrorViewProps> = ({
    error_msg,
    countdown,
    retryAvailable,
}) => (
    <div className='error' data-testid="cypress-error">
        <h1>{error_msg}</h1>
        {countdown > 0 ? (
            <h1>Refresh button available in {countdown} seconds</h1>
        ) : (
            retryAvailable && <button className='error__button' aria-label='refresh' onClick={() => window.location.reload()}>Refresh </button>
        )}
    </div>
);