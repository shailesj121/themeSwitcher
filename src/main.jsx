import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContent from './context/data.Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContent>
  </StrictMode>
)
