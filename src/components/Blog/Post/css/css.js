import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    blogPostMiniTextDatum : {
        fontWeight : '400',
        color: 'black'
    },
    card : {
        maxWidth: '50%',
        [theme.breakpoints.down('sm')] : {
            maxWidth: '100%'
        },
    },
    postTitleContainer : {
        backgroundColor: '#222222',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: '40px',
        paddingBottom: '50px',
        //paddingLeft: '170px' 
    },
    postTitleContent : {
        [theme.breakpoints.up('sm')] : {
            maxWidth: '50%'
        },
    },
    postImage : {
        width : '100%',
        display : 'inline-block'
    },
    postImageContainer : {
        paddingTop : '25px',
        [theme.breakpoints.up('sm')] : {
            float : 'right',
            marginTop : '-30%',
            maxWidth : '35%',
            marginRight : '-60px'
        },
    },
    postContentContainer : {
        padding : '0 20px',
        maxWidth : '65%',
        marginTop : '70px',

    },
    postImageTitle : {
        fontSize: '1.375rem',
        lineHeight: '1.7rem',
        marginBottom: '25px',
        marginTop: '25px',
        color: '#202020',
        wordWrap: 'break-word',
        fontWeight: '700',
    },
    postContent : {
        fontSize: '1.125rem',
        lineHeight: '1.4375rem',
        textAlign: 'left',
        color: '#666',
    }

}))



export default useStyles