import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { ButtonGroup, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { HamburgerMenu } from './components/hamburguerMenu/HamburgerMenu'
function App() {
  const nav = {
    height: '10rem',
    maxWidth: '100%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <div className="App">
      <nav style={nav} role='navigation'>
        <h2>Leprekus</h2> 
        <HamburgerMenu/>
      </nav>
    
      <Button component={Link} to='/'>About Me</Button>
      <Button component={Link} to='projects'>Projects</Button>
      <Button component={Link} to='projects'>Contact</Button>

      <Outlet/>
    </div>
  )
}

export default App
