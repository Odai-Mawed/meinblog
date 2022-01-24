//General
import React from 'react'
import { Link, Outlet } from "react-router-dom";

//mui components
import * as a from '@mui/material';
//mui icons
import * as icon from '@mui/icons-material';


import { makeStyles } from "@material-ui/core/styles";





const useStyles = makeStyles((theme) => ({

    icon : {
        [theme.breakpoints.down('sm')]: {
            display: 'block! important',
        },
    },
    drawerHeader : {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),

        justifyContent: 'flex-end',
    }

}));



export default function HeaderSitenavbar(){
    const classes = useStyles();

    var [offen, setOffen] = React.useState(false)

    const handleToggle = ()=>{
        setOffen(!offen)
    }
    const container = document.getElementsByClassName('makeStyles-postContainer-8')
    console.log(container)
    return(
        <>
            <a.IconButton edge="start" onClick={handleToggle} color="inherit" sx={{fontSize:'2rem'}} aria-label="menu">
                <icon.Menu/>
            </a.IconButton>
            <a.Drawer
                variant="persistent"
                open={offen}
                anchor='right'
                container={window.document.body}
                onClose={handleToggle}
                PaperProps={{
                    sx: { width: "100%",
                        backgroundColor:'#222222',
                        alignItems:'center',
                        justifyContent:'center',
                        color:'white'},
                  }}
                sx={{backgroundColor:'#222222'}}
                >
                <div className={classes.drawerHeader} onClick={handleToggle}>
                    <a.IconButton edge="start" color="inherit" aria-label="menu">
                        <icon.Close sx={{fontSize:'2.5rem'}}/>
                    </a.IconButton>
                </div>
                <a.List sx={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <a.Typography sx={{fontWeight:'700', fontSize:'1.7rem', textAlign:'center', marginBottom:'20px'}}>
                        PROFILE
                    </a.Typography>
                    <a.Typography sx={{fontWeight:'700', fontSize:'1.7rem', textAlign:'center', marginBottom:'20px'}}>
                        <Link to={`/Blog`}>Blog</Link> 
                    </a.Typography>
                    <a.Typography sx={{fontWeight:'700', fontSize:'1.7rem', textAlign:'center', marginBottom:'20px'}}>
                        ORTS
                    </a.Typography>
                    <a.Typography sx={{fontWeight:'700', fontSize:'1.7rem', textAlign:'center', marginBottom:'20px'}}>
                        LOGOUT
                    </a.Typography>
                </a.List>

                <a.Toolbar sx={{width:'300px', justifyContent: 'space-between'}}>
                    <a.IconButton edge="start" color="inherit" sx={{fontSize:4}}  aria-label="menu">
                        <icon.Twitter sx={{fontSize:'2.5rem'}}/>
                    </a.IconButton>
                    <a.IconButton edge="start" color="inherit" sx={{fontSize:'2.5rem'}}  aria-label="menu">
                        <icon.Facebook sx={{fontSize:'2.5rem'}}/>
                    </a.IconButton>
                    <a.IconButton edge="start" color="inherit" sx={{fontSize:'2.5rem'}}  aria-label="menu">
                        <icon.Instagram sx={{fontSize:'2.5rem'}}/>
                    </a.IconButton>
                </a.Toolbar>
            </a.Drawer>
    </>
    )
}