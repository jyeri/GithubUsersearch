import '../Styles/TitleView.scss';

export const Title = () => {
    // The Title component returns a div containing an h1 element.
    // This component serves as the title bar of the application.
    // The className "Title" is used for styling this component.
    // The className "Title__text" is used for styling the h1 element.
    // The data-testid attribute is used for identifying this element in end-to-end tests using Cypress.
    return (
        <div className="Title">
            <h1 className="Title__text" data-testid="cypress-title">Github people finder</h1>
        </div>
    );
};
