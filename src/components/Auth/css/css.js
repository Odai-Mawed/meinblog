import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    container : {
        borderTop: '1px solid var(--color-border-muted)',
        borderRadius: '6px',
        padding: '20px',
        fontsize: '14px',
        marginTop: '16px',
        backgroundColor: '#f6f8fa',
        width: 'fit-content',
        margin: 'auto',
    },
    eingabeFeld : {
        marginTop: '5px',
        marginBottom: '15px',
        display: 'block',
        width: '100%',
        padding: '5px 12px',
        fontSize: '14px',
        lineHeight: '20px',
        verticalAlign: 'middle',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 8px center',
        border: '1px solid var(--color-border-default)',
        borderRadius: '6px',
        outline: 'none',
        boxSizing: 'border-box',
    },
    signInButton : {
        marginTop: '20px',
        display: 'block',
        width: '100%',
        textAlign: 'center',
        transition: '.2s cubic-bezier(0.3, 0, 0.5, 1)',
        display: 'block',
        padding: '5px 16px',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        cursor: 'pointer',
        '-webkit-user-select': 'none',
        userSelect: 'none',
        border: '1px solid',
        borderRadius: '6px',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        appearance: 'none',
        boxSizing: 'border-box',
        backgroundColor: '#4ba54f',
        color: 'white',
        fontSize: '15px',
        fontWeight: '800',
    },
    signUpATag : {
        fontSize : '10px'
    }

}))



export default useStyles