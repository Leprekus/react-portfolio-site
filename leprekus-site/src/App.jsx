import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { ButtonGroup, Grid, Button, Divider } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { HamburgerMenu } from './components/hamburguerMenu/HamburgerMenu'
import { DayNightMode } from './components/DayNightMode/DayNightMode'
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
    marginLeft: '2rem',
    fontFamily: 'Hind, sans-serif',
    fontFamily: 'Lobster, cursive'
  }

  return (
    <div className="App">
      <nav style={nav} role='navigation'>
        <div style={textWrapper}>
          <h2>Leprekus</h2>
        </div>
        <HamburgerMenu/>
      </nav>
    
      <div className='nav-wrapper'>
        <ButtonGroup>
          <NavLink activeClassName='active' className='nav-button' to='/'>ABOUT ME</NavLink>
          <Divider/>
          <NavLink activeClassName='active' className='nav-button' to='projects'>PROJECTS</NavLink>
          <NavLink activeClassName='active' className='nav-button' to='projects'>CONTACT</NavLink>
        </ButtonGroup>
        <DayNightMode/>
      </div>
      <Outlet/>
    </div>
  )
}

export default App
