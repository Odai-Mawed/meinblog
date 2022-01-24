import React from 'react'
import * as a from '@mui/material';

import { makeStyles } from "@material-ui/core/styles";





const useStyles = makeStyles((theme) => ({

    header : {
        [theme.breakpoints.down('sm')]: {
            display: 'none! important',
        },
    },

}));


export default function HeaderText(props){
    const classes = useStyles();
    return(
        <a.Typography variant="h6" color="inherit" className={classes.header} component="div" sx={{ mr: 2 }}>
            {props.text}
        </a.Typography>
    )
}