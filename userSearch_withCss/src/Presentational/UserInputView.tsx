import '../Styles/UserInputView.scss';

interface IUserInputViewProps {
    id: string;
    query: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export const UserInputView: React.FunctionComponent<IUserInputViewProps> = ({
    id,
    query,
    handleInputChange,
    placeholder
}) => (
    <div className='search__container'>
        <input data-testid="cypress-input" className='search__input' id={id} value={query} onChange={handleInputChange} placeholder={placeholder}/>
    </div>
);