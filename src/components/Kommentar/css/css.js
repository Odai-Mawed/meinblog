import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    kommentatorName : {
            fontWeight: '900',
            marginRight: '15px'
    },
    KommentatorenContainer : {
        height: '300px',
        backgroundColor: 'aqua',
        width: 'fit-content',
        overflowY: 'scroll',
        width: '50%'
    }
}))




export default useStyles;