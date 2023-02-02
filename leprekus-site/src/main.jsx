import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import Root from './Root'
import Landing from './pages/Landing'
import About from './pages/About'
import Projects from './pages/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <Root/>
    <Landing/>
    <About/>
    <Projects/>
  </React.StrictMode>,
)
