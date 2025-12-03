import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/component/Home.jsx'
import About from './component/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    {/* <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ashikportfolio' element={<App/>}/>
       </Routes>
    </BrowserRouter> */}
  </StrictMode>,

)
