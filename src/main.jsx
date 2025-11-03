import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import Cursor from './Components/Cursor.jsx'
import Loader from './Components/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Loader/>
    <Cursor/>
    <Header/>
    <App />
    <Footer/>
    </BrowserRouter>
    

  </StrictMode>,
)
