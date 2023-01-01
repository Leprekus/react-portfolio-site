import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Grid, Paper, Typography } from '@mui/material'
import memoji from '../assets/memoji.png'
function Home () {
    const Item = styled(Card)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 'fit-content',
        padding: '1rem 1.2rem',
        width: '300px',
        lineHeight: '60px',
      }));
    const darkTheme = createTheme({ palette: { mode: 'dark' } });

    return (
        <ThemeProvider theme={darkTheme}>
            <Grid container justifyContent='center'>
                <Grid item xs={12} container justifyContent='center'>
                    <a href="https://github.com/Leprekus" target='_blank' className='memoji'>
                        <img src={memoji}/>
                        <h1>Raul Rodriguez</h1>
                        <h2>Front end Developer.</h2>
                    </a>
                </Grid>


                <Grid container item spacing={0} justifyContent='center'>
                    <Grid item >
                        <Item>
                            <CardHeader
                            title='Hard Skills'
                            />
                            <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
                            End to End Testing <br/>
                            Test Driven Development<br/>
                            Responsive and intuitive interface design <br/>
                            API Integration <br/>
                            Version Control <br/>
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item >
                        <Item>
                            <CardHeader
                            title='Soft Skills'
                            />
                            <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
                            Goal Driven <br/>
                            Problem Solving <br/>
                            Critical Thinking <br/>
                            Communication <br/>
                            Team Oriented <br/>
                            
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item >
                        <Item>
                            <CardHeader
                            title='Techonologies'
                            />
                            <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
                            React<br/>
                            Redux<br/>
                            React Router <br/>
                            Cypress <br/>
                            Jest <br/>
                            HTML <br/>
                            CSS <br/>
                            JS 
                            Git
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item >
                        <Item>
                            <CardContent>
                                <CardHeader
                                title='Experience'
                                />
                                <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
                                I am a self taught frontend engineer.
                                I completed the Codecademy Frontend Engineer Career Path.
                                </Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Home