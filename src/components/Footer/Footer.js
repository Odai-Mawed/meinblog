import * as a from '@mui/material';
import * as icon from '@mui/icons-material';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    footer : {
        backgroundColor: '#222222',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around',
        color: 'white',
        height: '370px'
    },
    footerTextContainer: {
        marginTop: '40px'
    }

}))



function Footer(){
    var classes = useStyles()


    return(
        <>
            <footer className={classes.footer}>
                <div>
                    <a.Typography sx={{fontSize: '1.875rem', lineHeight: '3.75rem'}}>
                        Berlin
                    </a.Typography>
                    <a.Typography sx={{fontSize: '1.875rem', lineHeight: '3.75rem'}}>
                        Hamburg
                    </a.Typography>
                </div>
                    <a.Typography sx={{lineHeight: '.875rem', color: '#666', fontSize: '.75rem'}}>
                        © Odai 2021 Imprint/Privacy
                    </a.Typography>
            </footer>
        </>
    )
}


export default Footer