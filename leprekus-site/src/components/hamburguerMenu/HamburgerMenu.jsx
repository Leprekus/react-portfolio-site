import { useState } from 'react'
import { Divider } from '@mui/material'
import { NavLink, Link } from 'react-router-dom'
import { Credits } from '../../pages/Credits'
import { NavBar } from '../Navbar/Navbar'
import './hamburgerMenu.css'
export const HamburgerMenu = () =>{ 
    const [displayCredits, setDisplayCredits] = useState('none')
    const handleShowCredits = () =>{
      setDisplayCredits('block')
    }
    return(
    <nav role="navigation">
      <div id="menuToggle">
     
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>
        
        <ul id="menu">
          <Link to="/"><li>Home</li></Link>
          <Divider sx={{ backgroundColor: '#464646' }} variant='middle'/>
          <a href="https://github.com/Leprekus" target='_blank'><li>Github</li></a>
          <Divider sx={{ backgroundColor: '#464646' }} variant='middle'/>
          <Link><li>Credits</li></Link>
          <Divider sx={{ backgroundColor: '#464646' }} variant='middle'/>
        </ul>
        <h2 className='subheader'>Front End Engineer</h2>
      </div>
      <div className='nav-buttons-container'>
        <NavLink to='/' className={({isActive}) => isActive ? 'active': 'nav-button'}>ABOUT ME</NavLink>
        <NavLink to='/projects' className={({isActive}) => isActive ? 'active': 'nav-button'}>PROJECTS</NavLink>
        <NavLink to='/contact-me' className={({isActive}) => isActive ? 'active': 'nav-button'}>CONTACT ME</NavLink>
      </div>
      {/* <Credits displayCredits={displayCredits} setDisplayCredits={setDisplayCredits}/> */}
    </nav>




)}