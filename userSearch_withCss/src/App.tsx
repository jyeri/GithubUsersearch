import { TitleBar } from './components/TitleBar/TitleBar';
import { UserSearch } from './components/UserSearch/UserSearchApp';
import './App.css'

function App() {
  // Using a fragment <> allows grouping of children without adding extra nodes to the DOM.
  // This is a common pattern in React when a component needs to return multiple elements.
  return (
    <>
      {/* 
        The TitleBar component is included here to ensure it is displayed across all pages.
        This is a common practice for components that remain constant across different views in the application.
      */}
      <TitleBar />

      {/* 
        The UserSearch component is included here as it represents the main feature of our application.
        Including it in the App component ensures it is centrally accessible and can be rendered on the main page.
      */}
      <UserSearch />
    </>
  )
}

export default App