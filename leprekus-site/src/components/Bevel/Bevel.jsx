import { Grow, Zoom, Grid, Typography } from '@mui/material'

import { useRef, useState } from 'react'
import './Bevel.css'
export const Bevel = ({ width=150, height=150, src='', timeout=1000, title, text}) => {
    const [show, setShow] = useState(false)
    const bevel = {
        backgroundColor: '#eceef2',
        width: width,
        height: height,
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
        backgroundImage: `url(${src})`,
        backgroundSize: '50% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        margin: '0.2rem 0',
        boxShadow: '0 2px 8px 5px rgba(0,0,0, 0.4)',
        
    
    }
    const textBox = {
        maxWidth: 250,
        height: 'fit-content',
        left: 130,
        padding: '1.5rem 1.5rem',
        position: 'absolute',
        backgroundColor: ' rgba(0,0,0, 0.9)',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 10px )',
        borderRadius: 10,
        transition: 'opacity 0.4s ease-in 0.2'

    }
 
    const bevelRef = useRef(null)
    const textBoxRef = useRef(null)
    const handleMouseEvent = (mouse) => {
        if(mouse) {
            bevelRef.current.style.transform = 'translate(15%, 0)'
            setShow(true)
            return 
        }
        bevelRef.current.style.transform = 'translate(0%, 0)'
        setShow(false)
        return

    }
    return (
        <Grid container>
            <Grow 
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: timeout } : {})}
            >
                <div style={bevel} className='bevel' ref={bevelRef} onMouseOver={() => handleMouseEvent(true)} onMouseLeave={() => handleMouseEvent(false)}>
                </div>
            </Grow>
            <div></div>
            <Zoom in={show} timeout={500} mountOnEnter unmountOnExit>
                <span style={textBox} ref={textBoxRef} onMouseOver={() => handleMouseEvent(true)} onMouseLeave={() => handleMouseEvent(false)}>
                    <Typography variant='h5'>{ title }</Typography>
                    <Typography variant='p' textAlign='justify'>{ text }</Typography>
                </span>   
            </Zoom>
        </Grid>
        )
}