import "./TitleBar.Style.scss"

export const TitleBar = () => {
    return (
        <div className="Title">
            <h1 className="Title__text" data-testid="cypress-title">Github people finder</ h1>
        </div>
    );
};
