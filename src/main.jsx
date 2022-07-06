import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About'
import Inventions from './Inventions'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
              <Route path="About-Us" element={<About />}></Route>
              <Route path="Things-We've-Done" element={<Inventions />}></Route>
          </Route>
        </Routes>
  </BrowserRouter>
)
