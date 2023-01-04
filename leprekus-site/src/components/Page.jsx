import { Grid } from '@mui/material'
import Carousel, { CarouselItem } from './Carousel/Carousel'
export const Page = ({ title, text }) => {
    const style = {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
        

    }
    return (
        <section style={style} className='tesoku'>
            <Grid container height={'100%'} flexDirection='column' justifyContent='space-between'>
                <Grid container item justifyContent='center' height='66.66%' sx={{ padding: '10rem'}}>
                    <h1>{ title }</h1>
                    <p>{ text }</p>
                    <p style={{ position: 'relative', top: 100}}><strong>See more</strong></p>
                </Grid>
                <Grid container item alignItems='flex-end'>
                    {/* <span style={{backgroundColor: 'red', minHeight: 250, width: '33.33%'}}></span>
                    <span style={{backgroundColor: 'blue', minHeight: 250, width: '33.33%'}}></span>
                    <span style={{backgroundColor: 'green', minHeight: 250, width: '33.33%'}}></span> */}
                    <Carousel style={{ width: '100%' }}>
                        <CarouselItem>Item 1</CarouselItem>
                        <CarouselItem>Item 2</CarouselItem>
                        <CarouselItem>Item 3</CarouselItem>
                    </Carousel>
                </Grid>
            </Grid>

        </section>
      
    )
}