import { NavBar } from "./components/Navbar/Navbar"
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const Root = () => {
    const sx = { position: 'absolute', minHeight: 600, top: 0, left: 0, right: 0, bottom: 0, srollBehavior: 'sticky' }
    return (
        <> 
            <Grid container flexWrap='wrap' heigh='100%' sx={sx}>
                <Grid item container md={6} height='100%'>
                    <NavBar/>
                </Grid>
                <Grid item container md={6} height='100%'>
                    <Outlet/>
                </Grid>
            </Grid>
        </>
    )
}