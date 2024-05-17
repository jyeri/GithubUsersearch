import { TitleBar } from './components/TitleBar/TitleBar';
import { UserSearch } from './components/UserSearch/UserSearchApp';
import './App.css'

function App() {
  // Using a fragment <> allows grouping of children without adding extra nodes to the DOM
  return (
    <>
      <TitleBar /> {/* TitleBar is placed here to be displayed across all pages, if i had more */}
      <UserSearch /> {/* UserSearch is a main feature component, placed in App for central accessibility */}
    </>
  )
}

// App is exported as default to simplify imports in other files
export default App