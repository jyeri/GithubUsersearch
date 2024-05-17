import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './Index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create new instance of QueryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)