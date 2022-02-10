import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    kommentatorName : {
            fontWeight: '900',
            marginRight: '15px'
    },
    kommentatorenContainer : {
        height: '300px',
        backgroundColor: '#f2f7f7bd',
        overflowY: 'scroll',
        maxWidth: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    searchBoxContainer : {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '20px',
        maxWidth: '80%'
    }
}))




export default useStyles;