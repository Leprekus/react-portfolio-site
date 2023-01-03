import { useState } from 'react'
import { Link } from 'react-router-dom'
import './hamburgerMenu.css'
export const HamburgerMenu = () =>{ 
    return(
    <div id="menuToggle">
    <input type="checkbox"/>
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <Link to="/credits"><li>Credits</li></Link>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>

)}