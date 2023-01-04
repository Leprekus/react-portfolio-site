import { Grid } from '@mui/material'
import Carousel, { CarouselItem } from '../components/Carousel/Carousel'
export const HomePageNew = () => {
    const style = {
        backgroundColor: 'purple',
        width: '100%',
        height: '100%',
        

    }
    return (
        <section style={style} className='tesoku'>
            <Grid container height={'100%'} flexDirection='column' justifyContent='space-between'>
                <Grid container item justifyContent='center' height='66.66%' sx={{ padding: '10rem'}}>
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti labore voluptatem at a autem cum hic ipsam neque voluptatum quo, dicta iure placeat accusamus magni, vero quibusdam eum debitis.</p>
                    <p style={{ position: 'relative', top: 100}}><strong>See more</strong></p>
                </Grid>
                <Grid container item justifyContent='flex-start' alignItems='flex-end' flexDirection='row' height='33.33%'>
                    <button style={{ height: '20%'}}>previous</button>
                    <button style={{ height: '20%'}}>next</button>
                    <Grid container item alignItems='flex-end'>
                        {/* <span style={{backgroundColor: 'red', minHeight: 250, width: '33.33%'}}></span>
                        <span style={{backgroundColor: 'blue', minHeight: 250, width: '33.33%'}}></span>
                        <span style={{backgroundColor: 'green', minHeight: 250, width: '33.33%'}}></span> */}
                        <Carousel>
                            <CarouselItem>Item 1</CarouselItem>
                            <CarouselItem>Item 2</CarouselItem>
                            <CarouselItem>Item 3</CarouselItem>
                        </Carousel>
                    </Grid>
                </Grid>
            </Grid>

        </section>
      
    )
}