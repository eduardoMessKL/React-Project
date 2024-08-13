import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Facebook from './components/Facebook.jsx'
import Instagram  from './components/Instagram.jsx' 

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Facebook />
    <Instagram />
  </StrictMode>,
)
