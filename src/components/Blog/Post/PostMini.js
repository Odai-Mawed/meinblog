//mui components
import * as a from '@mui/material';
//styles
import useStyles from './css/css'
//media
import berlinBild from '../media/berlin.jpeg'
// Generals for navigtion
import { useNavigate } from "react-router-dom";




function PostMini(props){
    const navigate = useNavigate();

    const classes = useStyles();
    console.log(props.postId)
    return(
        <a.Card className={classes.card} >
            <a.CardMedia
                component="img"
                height="350"
                image={berlinBild}
                alt="green iguana"
            />
            <a.CardContent sx={{paddingTop: '35px', paddingRight:'35px', paddingLeft:'35px'}}>
                <a.Typography gutterBottom variant="h4" component="div"
                    sx={{fontWeight:'600',  fontSize:'2rem', lineHeight:'2.5rem'}}>
                    Blogpost überschrift
                </a.Typography>
                <a.Typography variant="body2" color="text.secondary">
                    <span className={classes.blogPostMiniTextDatum}>01 | 01 | 2021</span> Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </a.Typography>
            </a.CardContent>
            <a.CardActions sx={{paddingButtom: '35px', paddingRight:'35px', paddingLeft:'35px'}}>
                <a.Button size="small">Share</a.Button>
                <a.Button size="small" onClick={()=>navigate(`/Blog/${props.postId}`)}>
                    Learn More
                </a.Button>
            </a.CardActions>
        </a.Card>
    )
}


export default PostMini