import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    whatCannIDoForYouContainer : {
        padding : '90px 45px 100px 45px',
        maxWidth: '75%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },  
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:'0px',
        maxWidth: '100%',
        [theme.breakpoints.only('xs')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },  
    },
    avatarContainer : {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }
}))



export default useStyles