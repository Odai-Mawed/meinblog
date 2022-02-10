//mui components
import * as a from '@mui/material';

//styles
import useStyles from './css/css'

//Costum Component
import WhatCannIDoForYou from '../WhatCannIDoForYou'

function PostComponentTitle(props){
    var classes = useStyles()
    return(
        <>
            <div className={classes.postTitleContainer}>
                <a.Typography sx={{color: 'white',
                    lineHeight: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    paddingLeft: '20px',
                    marginBottom: '50px'
                    }}>
                    OKTOBER 10, 2021
                </a.Typography>
                <a.Typography sx={{color: 'white',
                    lineHeight: '2.0625rem',
                    fontSize: '1.875rem',
                    fontWeight: '900',
                    paddingLeft: '20px'}} className={classes.postTitleContent}>
                        {props.title}
                </a.Typography>
            </div>
        </>
    )
}



function PostComponentImage(props){
    var classes = useStyles()

    return(
        <>
            <div className={classes.postImageContainer}>
                <img src={props.image} className={classes.postImage} alt=""/>
            </div>
        </>
    )
}



function PostComponentImageTitle(props){
    var classes = useStyles()
    console.log(props)
    return(
        <>
            <h3 className={classes.postImageTitle}>
                {props.imageDescription}
            </h3>
        </>
    )
}

function PostComponentContent(props){
    var classes = useStyles()

    return(
        <>
            <div className={classes.postContent}>
                <p>
                    {props.content}
                </p>
            </div>
        </>
    )
}



function PostComponent(props){
    var classes = useStyles()
    console.log(props)
    return (
        <>
            <PostComponentTitle title={props.post.title}/>
            <div className={classes.postContentContainer}>
                <PostComponentImage image={props.post.image}/>
                <PostComponentImageTitle imageDescription={props.post.imageDescription}/>
                <PostComponentContent content={props.post.content}/>
            </div>
            <WhatCannIDoForYou />
        </>
    )
}


export default PostComponent;