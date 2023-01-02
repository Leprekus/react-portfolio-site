import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { ButtonGroup, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { HamburgerMenu } from './components/hamburguerMenu/HamburgerMenu'
function App() {
  const nav = {
    height: '5rem',
    maxWidth: '100%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'baseline'

  }
  const textWrapper = {
    display: 'flex',
    height: '100%',
    width: 'fit-content',
    alignItems: 'center',
    marginLeft: '2rem'
  }
  return (
    <div className="App">
      <nav style={nav} role='navigation'>
        <div style={textWrapper}>
          <h2>Leprekus</h2> 
        </div>
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
