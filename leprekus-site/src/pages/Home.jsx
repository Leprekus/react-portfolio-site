import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Grid, Paper, Typography } from '@mui/material'
import { Bevel } from '../components/Bevel/Bevel';
import { Post } from '../components/Post';
import memoji from '../assets/memoji.png'
import userLight from '../assets/userLight.png'
import userDark from '../assets/userDark.png'
import cpuLight from '../assets/cpuLight.png'
import cpuDark from '../assets/cpuDark.png'
import cvLight from '../assets/cvLight.png'
import cvDark from '../assets/cvDark.png'
import cloudLight from '../assets/cloudLight.png'
import cloudDark from '../assets/cloudDark.png'

function Home () {
    const icons = {
        light: [userLight, cpuLight, cvLight, cloudLight],
        dark: [userDark, cpuDark, cvDark, cloudDark]
    }
    const titles = ['Soft Skills', 'Technologies','Hard Skills', 'Experience']
    const text = ['Goal Driven Problem Solving Critical Thinking Communication Team Oriented', 'React Redux React Router  Cypress  Jest  HTML  CSS  Git', 'End to End Testing Test Driven Development Responsive and intuitive interface design API Integration Version Control','Self Taught. Completed Codecademy Frontend Engineer Path, Currently Awaiting to start a bachelor in Computer Science.']
    return (
        <>
        <Grid container direction='row' md={12} rowGap={10} margin='auto'> 
            <Grid container item display='inline-block' sm={12} md={4} lg={4} xl={3} justifyContent='end' paddingLeft='1rem'>
                {
                    icons['light'].map((icon, i) => {

                        return (
                        <Bevel
                        key={i}
                        width={90}
                        height={100}
                        timeout={1000}
                        src={icon}
                        title={titles[i]}
                        text={text[i]}
                        />)
                    })
                }
            </Grid>
            <Grid container item sm={12} md={3} lg={4} xl={3} justifyContent='center'>
                <img src={memoji}/>
                <Typography color='black' textAlign='justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ab iure, eius veritatis ducimus qui obcaecati tempora, quidem sed, facere optio incidunt earum veniam asperiores ratione quaerat vel sapiente! Ratione.
                Consequuntur animi molestias, repellat placeat commodi nostrum labore aperiam accusamus dolorum tenetur numquam quibusdam iste et error ut aliquid architecto odit earum iure! Id reiciendis consequatur corporis quas dolor quidem.
                Rerum veritatis reiciendis ipsum quaerat esse! Ut mollitia in recusandae similique ea sunt labore ratione nostrum reprehenderit expedita quia, est voluptates facere iure sapiente voluptatem eveniet quos, doloremque dolore assumenda.
                </Typography>
            </Grid>
            <Grid container item sm={12} md={5} lg={4} xl={3} justifyContent='end'paddingRight='1rem'> 
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
    //                     Goal Driven Problem Solving Critical Thinking Communication Team Oriented
                        
    //                     </Typography>
    //                 </Item>
    //             </Grid>
    //             <Grid item >
    //                 <Item>
    //                     <CardHeader
    //                     title='Techonologies'
    //                     />
    //                     <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
    //                     React Redux React Router  Cypress  Jest  HTML  CSS  Git
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