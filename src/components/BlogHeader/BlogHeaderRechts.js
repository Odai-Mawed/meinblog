import React from 'react'
import * as a from '@mui/material';
import * as icon from '@mui/icons-material';
import HeaderText from './BlogHeaderText'
import HeaderSitenavbar from './BlogHeaderSitenavbar'
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    header : {
        [theme.breakpoints.down('sm')]: {
            display: 'none! important',
        },
    },

}));



export default function HeaderRechts(){
    const classes = useStyles();


    return(
        <>
            <HeaderSitenavbar></HeaderSitenavbar>
        </>
    )
}