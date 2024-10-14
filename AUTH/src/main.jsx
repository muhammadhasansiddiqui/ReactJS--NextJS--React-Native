import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import ProfileCard from './cardprofile.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
 
  </StrictMode>,
)
