import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Credits } from '../../pages/Credits'
import './hamburgerMenu.css'
export const HamburgerMenu = () =>{ 
    const [displayCredits, setDisplayCredits] = useState('none')
    const handleShowCredits = () =>{
      setDisplayCredits('block')
    }
    return(
    <>
    <div id="menuToggle">
    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <Link onClick={handleShowCredits}><li>Credits</li></Link>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
  <Credits displayCredits={displayCredits} setDisplayCredits={setDisplayCredits}/>
  </>

)}