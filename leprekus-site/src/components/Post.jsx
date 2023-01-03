import { 
    Avatar,
    Card, 
    CardHeader, 
    CardMedia,
    CardContent,
    Typography, 
    CardActions,
    IconButton
} from '@mui/material'
import memoji from '../assets/memoji.png'
export const Post = () => {
    const postStyle = {
        height: 345,
        width: 300
    }
    return (
        <Card 
        elevation={10}
        sx={postStyle}
        >
            <CardHeader 
            avatar={
                <Avatar  
                sx={{ bgcolor: 'red' }} aria-label="recipe"
                >R
                </Avatar>
            }
            title='here goes username'
            subheader='place'
            action={
            <IconButton>
            
            </IconButton>}
            />
            <CardMedia 
            component='img'
            alt='post image'
            image={memoji}
            />

            <CardActions>
                <IconButton></IconButton>
            </CardActions>
            <CardContent>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias labore molestiae rem perferendis odio eveniet mollitia veritatis ut! Reprehenderit porro itaque nemo eum nam enim ullam deleniti dolore corporis beatae!</Typography>
            </CardContent>
        </Card>
    )
}