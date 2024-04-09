import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NavProvider } from './hooks/NavContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </React.StrictMode>,
)
