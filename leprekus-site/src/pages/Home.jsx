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
    const handleOpenGithub = () => {
        window.open('https://github.com/Leprekus')
    }
    return (
        <ThemeProvider theme={darkTheme}>
            <Grid container justifyContent='center'>
                <Grid item xs={4} spacing={0} container justifyContent='center' flexDirection='column' className='profile-link'>
                        <img src={memoji} onClick={handleOpenGithub}/>
                        <h1 onClick={handleOpenGithub}>Raul Rodriguez</h1>
                        <h2 onClick={handleOpenGithub}>Front end Developer.</h2>
                </Grid>


                <Grid container item spacing={0} justifyContent='center'>
                    <Grid item >
                        <Item>
                            <CardHeader
                            title='Skillset'
                            />
                            <Typography color={'whitesmoke'} fontSize={20} textAlign='justify'>
                            I currently do
                            end to end testing and am profficient in
                            React and Redux. My biggest passion for
                            development stem from two things: being
                            able to bring to life whatever comes to
                            mind and being able to optimize it in
                            order to achieve maximum performance.
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
                    <Grid item >
                        <Item>
                            <CardContent>
                                <CardHeader
                                title='Work Experience'
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