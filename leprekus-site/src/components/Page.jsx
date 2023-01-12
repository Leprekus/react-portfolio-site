import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import Carousel, { CarouselItem } from './Carousel/Carousel'
import { ContactForm } from './ContactForm/ContactForm'
export const Page = ({ title, text, contact, items, displayItems, caption }) => {
    const style = {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
        

    }
    const shapeOutside = {
        width:'fit-content',
        height:'fit-content',
        display: 'inline-block',
        // clipPath: 'polygon(100% 0, 100% 50%, 50% 50%, 50% 100%, 0 100%, 0 0)',
        // wordWrap: 'break-word'
    }
    return (
        <section style={style} className='tesoku'>
            <Grid container height={'100%'} flexDirection='column' justifyContent='center' flexWrap='nowrap'>
                <Grid container item justifyContent='center' height='66.66%' sx={{ padding: '10rem'}} >

                    <h1>{ title }</h1>
                    <div style={{ float:'left'}}>
                        <p style={{ margin: '1rem 0'}}>{ text }</p>
                    </div>
                    <Link href='#projects'><strong>See more</strong></Link>
                    { contact && <a href="mailto:raulrodriguez@leprekus.dev">
                        <h3>RaulRodriguez@leprekus.dev</h3>
                    </a> }
                </Grid>
                <Grid container item alignItems='flex-end' width='100%' flexWrap='no-wrap'>
                    <Carousel displayItems={displayItems} caption={caption}>
                        {items.map((item, index) => 
                        <CarouselItem key={index}>
                            { item }
                        </CarouselItem>
                        )}
                    </Carousel>
                </Grid>
            </Grid>

        </section>
      
    )
}