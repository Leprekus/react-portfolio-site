import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { ButtonGroup, Grid, Button } from '@mui/material'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <ButtonGroup>
      <Button component={Link} to='about-me'>About Me</Button>
      <Button component={Link} to='projects'>Projects</Button>
      <Button component={Link} to='projects'>Contact</Button>
    </ButtonGroup>
      <Outlet/>
    </div>
  )
}

export default App
