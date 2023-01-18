import { Card, CardHeader, Grid, Typography} from '@mui/material'
export const SeeMore = () => {
   const hardSkillsSubheader = ['End-To-End Testing','Data Structures and Algorithms','JavaScript Frameworks']
   const hardSkillsText = ['','','']

   const softSkillsSubheader = ['Communication','Curiosity','Empathy']
   const softSkillsText = ['','','']
   
    const experienceSubHeader = ['Codecademy', 'Uniform Central', 'Personal']
    const experienceText = ['','','Deployed a CI/CD pipeline for my personal website and reddit portfolio using Netlify']
    
    const cardStyle = {
        maxWidth: 300, 
        textAlign: 'justify',
        padding: '1rem'
    }
    return ( 
        <Grid container spacing={2}>
            <Grid xs={12} container item justifyContent='center'>
                <Typography variant='h5'>Hard Skills</Typography>
            </Grid>
            <Grid container item justifyContent='center' padding='0.5rem'>
            {hardSkillsSubheader.map((el, i) => 
                <Card sx={cardStyle}>
                    <CardHeader
                        subheader={el}
                    />
                    <Typography>{hardSkillsText[i]}</Typography>
                </Card>
                )}

            </Grid>
            <Grid xs={12} container item justifyContent='center'>
                <Typography variant='h5'>Soft Skills</Typography>
            </Grid>
            <Grid container item padding='0.5rem' justifyContent='center'>
            {softSkillsSubheader.map((el, i) => 
                <Card sx={cardStyle}>
                    <CardHeader
                        subheader={el}
                    />
                    <Typography>{softSkillsText[i]}</Typography>
                </Card>
                )}
            </Grid>
            <Grid xs={12} container item justifyContent='center'>
                <Typography variant='h5'>Experience</Typography>
            </Grid>
            <Grid container item padding='0.5rem' justifyContent='center'>
                {experienceSubHeader.map((el, i) => 
                <Card sx={cardStyle}>
                    <CardHeader
                        subheader={el}
                    />
                    <Typography>{experienceText[i]}</Typography>
                </Card>
                )}
            </Grid>
        </Grid>
    )
}