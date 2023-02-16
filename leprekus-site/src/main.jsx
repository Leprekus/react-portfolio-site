import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import Root from './Root'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <Root/>
    <Landing/>
    <About/>
    <Technologies/>
    <Projects/>
    <Contact/> */}
  </React.StrictMode>,
)
