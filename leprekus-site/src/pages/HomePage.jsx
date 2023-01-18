import { Page } from "../components/Page"
import { useEffect, useState } from "react"
import reactIcon from '../assets/react.png'
import reduxIcon from '../assets/redux.png'
import jsIcon from '../assets/js.png'
import cypressIcon from '../assets/cypress.png'
import pythonIcon from '../assets/python.png'
import { LinearProgress, Tooltip } from "@mui/material"
export const HomePage = () => {
    const [proficiencyLevel, setProficiencyLevel] = useState([0,0,0,0,0,0])
    const values = [80, 75, 100, 67, 50, 10]
    useEffect(()=> {
        const interval = setTimeout(() => {
            setProficiencyLevel(values)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    const images = [reactIcon, reduxIcon, jsIcon, cypressIcon, pythonIcon]
    const technologies = ['React', 'Redux', 'JavaScript', 'Cypress', 'Python']
    const items = images.map((src, i) => 
    <div 
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}
    key={i}
    >
            <Tooltip title={`${technologies[i]}`} arrow placement='top'>
                <img src={src} style={{ width: 'auto', height: '25%', margin: '0.7rem' }}/>
            </Tooltip>
            <LinearProgress sx={{ width: 100}} variant='determinate' value={proficiencyLevel[i]} />
    </div>
   
    )
    return (
        <Page
        title='Turning Ideas Into Reality'
        text='Self taught. Love working on challenging problems and thinking outside the box.'
        items={items}
        displayItems={3}
        caption='Technologies'
        />
    )
}