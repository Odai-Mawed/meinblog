import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    blogTitleContainer : {
        backgroundColor: '#222222',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            height: '400px',
        },
        [theme.breakpoints.up('md')]: {
            height: '560px',
        },
        [theme.breakpoints.up('lg')]: {
            height: '400px',
        },
    },
    whatCannIDoForYouContainer : {
        padding : '90px 45px 100px 45px'
    },  
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:'0px',
        maxWidth: '100%'
    },
    avatarContainer : {
        [theme.breakpoints.down('900')]: {
            display: 'none',
        },
    },
}))



export default useStyles