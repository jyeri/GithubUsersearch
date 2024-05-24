import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Index.css'
import { ClientProvider} from '../Providers/QueryClientProvider.tsx'
// Create new instance of QueryClient

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ClientProvider>
      <App />
    </ClientProvider>
  </React.StrictMode>,
)