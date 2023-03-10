import { NavBar } from "./components/Navbar/Navbar"
import { Grid, Box } from '@mui/material'
import { styled } from '@mui/material/styles';

import { Outlet } from 'react-router-dom'
import { Projects } from "./pages/Projects";
import { SeeMore } from "./pages/SeeMore";
import profilePicture from './assets/profile-pic.jpg'

export const Root = () => {
    const Styles = styled('div')(({ theme }) => ({
        // padding: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
          spacing: 0,
          backgroundColor: 'green'
        },
        // [theme.breakpoints.up('sm')]: {
        //   minHeight: 800,
        // },
        // [theme.breakpoints.up('lg')]: {
        //   backgroundColor: 'green',
        // },
      }));

    const sx = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }
    return (
        <Styles> 
            <Grid container flexWrap='wrap' sx={sx} spacing={2}>
                <Box component={Grid} item container md={6} boxShadow={3} minHeight='100%' sx={{ backgroundImage: `url(${profilePicture})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <NavBar/>
                </Box>
                <Grid item container md={6} minHeight='100%'>
                    <Outlet/>
                </Grid>
               {/* <SeeMore/> */}
            </Grid>
        </Styles>
    )
}