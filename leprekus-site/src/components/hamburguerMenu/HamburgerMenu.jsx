import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Credits } from '../../pages/Credits'
import { NavBar } from '../Navbar/Navbar'
import './hamburgerMenu.css'
export const HamburgerMenu = () =>{ 
    const [displayCredits, setDisplayCredits] = useState('none')
    const handleShowCredits = () =>{
      setDisplayCredits('block')
    }
    return(
    <nav>

      {/* <Credits displayCredits={displayCredits} setDisplayCredits={setDisplayCredits}/> */}
    </nav>


)}