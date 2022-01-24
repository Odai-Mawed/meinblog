import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    homeBody : {
        backgroundColor: '#222222',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ueberschrift : {
        color: 'white',
        fontWeight: '600',
        fontSize: '3.75rem',
        textAlign: 'center',
        padding: '0 10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.875rem',
        },
    },
    unterUeberschrift : {
        color: 'white',
        textAlign: 'center',
        fontSize: '0.75rem'
    }
}));



export default useStyles;