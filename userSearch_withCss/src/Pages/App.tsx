import { Title } from '../Presentational/TitleView';
import { UserInput } from '../Containers/UserInput/UserInput';
import { UserSearch } from '../Containers/UserSearch/UserSearch';
import { QueryContextProvider } from '../Providers/QueryContextProvider'; // Import the QueryContextProvider component
import './App.css'

function App() {
  return (
    <>
      <Title />
      <QueryContextProvider>
        <UserInput />
        <UserSearch />
      </QueryContextProvider>
    </>
  )
}

export default App;