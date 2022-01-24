//mui components
import * as a from '@mui/material';

//styles
import useStyles from './css/css'




function BlogMain(){
    var classes = useStyles()
    return (
        <div className={classes.blogTitleContainer}>
            <a.Typography sx={{color: 'white',
                fontSize: '3.125rem',
                lineHeight: '3.75rem',
                fontWeight: '600',
                paddingBottom: '40px',
                paddingLeft: '30px'}}>
                Blog
            </a.Typography>
        </div>
    )
}



export default BlogMain;