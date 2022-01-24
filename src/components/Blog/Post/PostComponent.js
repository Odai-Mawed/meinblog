//mui components
import * as a from '@mui/material';

//styles
import useStyles from './css/css'


//media
import berlinBild from '../media/berlin.jpeg'

//Costum Component
import WhatCannIDoForYou from '../WhatCannIDoForYou'

function PostComponentTitle(){
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
                    Remote, office, hybrid: what we learned about co-creation
                </a.Typography>
            </div>
        </>
    )
}



function PostComponentImage(){
    var classes = useStyles()

    return(
        <>
            <div className={classes.postImageContainer}>
                <img src={berlinBild} className={classes.postImage} alt=""/>
            </div>
        </>
    )
}



function PostComponentImageTitle(){
    var classes = useStyles()

    return(
        <>
            <h3 className={classes.postImageTitle}>
                Judith Janz and Markus Meißner 
                reflect on how co-creation has changed as a 
                result of virtual opportunities.
            </h3>
        </>
    )
}

function PostComponentContent(){
    var classes = useStyles()

    return(
        <>
            <div className={classes.postContent}>
                <p>
                    Judith Janz and Markus Meißner,
                    both senior experience designers
                    and enterprise design thinking coaches 
                    at IBM iX in Berlin, worked mostly
                    from home during the pandemic.
                    Now they are returning to the agency more frequently,
                    and reflect on how co-creation has      
                    changed as a result of virtual opportunities.
                </p>
            </div>
        </>
    )
}



function PostComponent(){
    var classes = useStyles()
    return (
        <>
            <PostComponentTitle />
            <div className={classes.postContentContainer}>
                <PostComponentImage />
                <PostComponentImageTitle />
                <PostComponentContent />
            </div>
            <WhatCannIDoForYou />
        </>
    )
}


export default PostComponent;