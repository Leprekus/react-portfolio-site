import { NavBar } from "./components/Navbar/Navbar"
import { Grid, Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';

import { Outlet } from 'react-router-dom'

export const Root = () => {
    const Styles = styled('div')(({ theme }) => ({
        padding: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
          backgroundColor: red[500],
        },
        [theme.breakpoints.up('md')]: {
          backgroundColor: blue[500],
        },
        [theme.breakpoints.up('lg')]: {
          backgroundColor: green[500],
        },
      }));

    const sx = { position: 'absolute', minHeight: 600, top: 0, left: 0, right: 0, bottom: 0, srollBehavior: 'sticky' }
    return (
        <Styles> 
            <Grid container flexWrap='wrap' sx={sx} spacing={2}>
                <Box component={Grid} item container md={6} boxShadow={3} minHeight='100%'>
                    <NavBar/>
                </Box>
                <Grid item container md={6} minHeight='100%'>
                    <Outlet/>
                </Grid>
            </Grid>
        </Styles>
    )
}