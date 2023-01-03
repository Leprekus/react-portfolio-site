import { NavBar } from "./components/Navbar/Navbar"
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const Root = () => {
    console.log(document.width)
    return (
        <> 
            <Grid container flexWrap='wrap' heigh='100%' sx={{ position: 'absolute', height: '100%', top: 0, left: 0, right: 0, bottom: 0 }}>
                <Grid item container md={6}>
                    <NavBar/>
                </Grid>
                <Grid item container md={6}>
                    <Outlet/>
                </Grid>
            </Grid>
        </>
    )
}