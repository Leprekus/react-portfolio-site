import { useState } from 'react'
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
          <a href="https://github.com/Leprekus" target='_blank'><li>Github</li></a>
          <Link><li>Credits</li></Link>
          <Link href="https://erikterwan.com/" target="_blank"><li>Show me more</li></Link>
        </ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <NavLink to='/' className={({isActive}) => isActive ? 'active': 'nav-button'}>About Me</NavLink>
        <NavLink to='/projects' className={({isActive}) => isActive ? 'active': 'nav-button'}>Projects</NavLink>
        <NavLink to='/contact-me' className={({isActive}) => isActive ? 'active': 'nav-button'}>Contact Me</NavLink>
      </div>
      {/* <Credits displayCredits={displayCredits} setDisplayCredits={setDisplayCredits}/> */}
    </nav>




)}