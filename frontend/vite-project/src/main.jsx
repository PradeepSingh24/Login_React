import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Success from './Success.jsx'
import Fail from './Fail.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/success' element={<Success/>} />
      <Route path='/fail' element={<Fail/>} />
    </Routes>
  </BrowserRouter>
)
