//General
import React from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
//mui components
import * as a from '@mui/material';
//media
import meinBlogLogo from './Media/Images/meinBlog2.png';

//styles
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    img : {
        filter: 'brightness(6)'
    }
}));

export default function Logo(){
    const navigate = useNavigate();

    const classes = useStyles();
    return(
        <a.Box
        component="div"
        sx={{
        height: 90,
        flexGrow: 0.7
        }}
        alt="Your logo."
        
        >
            <img src={meinBlogLogo} className={classes.img} height={90} onClick={()=>navigate('/')}/>
        </a.Box>
    )
}