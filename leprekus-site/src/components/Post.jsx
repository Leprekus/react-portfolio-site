import { 
    Card, 
    CardHeader, 
    CardMedia,
    CardActionArea,
    IconButton
} from '@mui/material'
export const Post = () => {
    return (
        <Card elevation={10}>
            <CardHeader 
            title='here goes username'/>
            <CardMedia 
            src='https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg'
            />
            <CardActionArea>
                <IconButton></IconButton>
            </CardActionArea>
        </Card>
    )
}