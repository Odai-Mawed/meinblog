import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    whatCannIDoForYouContainer : {
        padding : '90px 45px 100px 45px'
    },  
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:'0px',
        maxWidth: '100%',
        [theme.breakpoints.only('xs')]: {
            flexDirection: 'column',
        },  
    },
    avatarContainer : {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }
}))



export default useStyles