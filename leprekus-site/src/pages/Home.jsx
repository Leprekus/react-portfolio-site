import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Grid, Paper, Typography } from '@mui/material'
import { Bevel } from '../components/Bevel';
import { Post } from '../components/Post';
import memoji from '../assets/memoji.png'
import userLight from '../assets/userLight.png'
import userDark from '../assets/userDark.png'
function Home () {
    const bevel = {
        backgroundColor: 'red',
        width: 140,
        height: 150,
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
    }
    return (
        <>
        <Grid container direction='row' sm={4} md={12}> 
            <Grid container item display='inline-block' sm={4} md={4} justifySelf='start' paddingLeft='1rem'>
                <Bevel width={90} height={100} timeout={1000} src={''}/>
                <Bevel width={90} height={100} timeout={2000}/>
                <Bevel width={90} height={100} timeout={3000}/>
                <Bevel width={90} height={100} timeout={3500}/>
            </Grid>
            <Grid container item sm={4} md={4} justifyContent='center'>
                <img src={memoji}/>
                <Typography color='black' textAlign='justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ab iure, eius veritatis ducimus qui obcaecati tempora, quidem sed, facere optio incidunt earum veniam asperiores ratione quaerat vel sapiente! Ratione.
                Consequuntur animi molestias, repellat placeat commodi nostrum labore aperiam accusamus dolorum tenetur numquam quibusdam iste et error ut aliquid architecto odit earum iure! Id reiciendis consequatur corporis quas dolor quidem.
                Rerum veritatis reiciendis ipsum quaerat esse! Ut mollitia in recusandae similique ea sunt labore ratione nostrum reprehenderit expedita quia, est voluptates facere iure sapiente voluptatem eveniet quos, doloremque dolore assumenda.
                </Typography>
            </Grid>
            <Grid container item sm={4} md={4} justifyContent='end'paddingRight='1rem'> 
                <Post/>
            </Grid>
        </Grid>
        </>
        )
    }
    // <ThemeProvider theme={darkTheme}>
    //     <Grid container justifyContent='center'>
    //         <Grid item xs={12} container justifyContent='center'>
    //             <a href="https://github.com/Leprekus" target='_blank' className='memoji'>
    //                 <img src={memoji}/>
    //                 <h1>Raul Rodriguez</h1>
    //                 <h2>Front end Developer.</h2>
    //             </a>
    //         </Grid>


    //         <Grid container item spacing={0} justifyContent='center'>
    //             <Grid item >
    //                 <Item>
    //                     <CardHeader
    //                     title='Hard Skills'
    //                     />
    //                     <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
    //                     End to End Testing <br/>
    //                     Test Driven Development<br/>
    //                     Responsive and intuitive interface design <br/>
    //                     API Integration <br/>
    //                     Version Control <br/>
    //                     </Typography>
    //                 </Item>
    //             </Grid>
    //             <Grid item >
    //                 <Item>
    //                     <CardHeader
    //                     title='Soft Skills'
    //                     />
    //                     <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
    //                     Goal Driven <br/>
    //                     Problem Solving <br/>
    //                     Critical Thinking <br/>
    //                     Communication <br/>
    //                     Team Oriented <br/>
                        
    //                     </Typography>
    //                 </Item>
    //             </Grid>
    //             <Grid item >
    //                 <Item>
    //                     <CardHeader
    //                     title='Techonologies'
    //                     />
    //                     <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
    //                     React<br/>
    //                     Redux<br/>
    //                     React Router <br/>
    //                     Cypress <br/>
    //                     Jest <br/>
    //                     HTML <br/>
    //                     CSS <br/>
    //                     JS 
    //                     Git
    //                     </Typography>
    //                 </Item>
    //             </Grid>
    //             <Grid item >
    //                 <Item>
    //                     <CardContent>
    //                         <CardHeader
    //                         title='Experience'
    //                         />
    //                         <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
    //                         I am a self taught frontend engineer.
    //                         I completed the Codecademy Frontend Engineer Career Path.
    //                         </Typography>
    //                     </CardContent>
    //                 </Item>
    //             </Grid>
    //         </Grid>
    //     </Grid>
    // </ThemeProvider>

export default Home