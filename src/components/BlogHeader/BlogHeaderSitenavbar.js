//General
import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from 'react';

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
    },
    cursorPointer : {
        cursor : 'pointer',
        '&:hover': {
            fontWeight: '100'
         },
    },

}));




export default function HeaderSitenavbar(){
    const classes = useStyles();
    let navigate = useNavigate();

    var [offen, setOffen] = React.useState(false)
    var [istAngemeldet, setIstAngemeldet] = useState(false);

    const handleToggle = ()=>{
        setOffen(!offen)
    }

    async function signOut() {
        try {
            await Auth.signOut();
            navigate(`/SignIn`);

            console.log('du bist jetzt abgemeldet')
        } catch (error) {
            console.log('error signing out: ', error);
            
        }
    }
    useEffect(async ()=>{
        async function lookIfUserIsAngemeldet(){
            try{
                var user = await Auth.currentAuthenticatedUser();
                if(user){
                    setIstAngemeldet(true);
                }
            }catch(error){
                setIstAngemeldet(false);
                console.log('Der User ist nicht angemeldet', error);
            }
        }
        await lookIfUserIsAngemeldet();
    })

    async function navigateToBlog(){
        navigate('/Blog')
    }
    async function navigateToProfile(){
        navigate('/Profile')
    }
    async function navigateToSignIn(){
        navigate('/SignIn')
    }
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
                <div className={classes.drawerHeader } onClick={handleToggle}>
                    <a.IconButton edge="start" color="inherit" aria-label="menu">
                        <icon.Close className={classes.cursorPointer} sx={{fontSize:'2.5rem'}}/>
                    </a.IconButton>
                </div>
                <a.List sx={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <a.Typography className={classes.cursorPointer} onClick={navigateToProfile} sx={{fontWeight:'700', fontSize:'1.7rem', textAlign:'center', marginBottom:'20px'}}>
                        PROFILE
                    </a.Typography>
                    <a.Typography className={classes.cursorPointer} onClick={navigateToBlog} sx={{fontWeight:'700', fontSize:'1.7rem', textAlign:'center', marginBottom:'20px'}}>
                        Blog
                    </a.Typography>
                    {console.log(istAngemeldet)}
                    {
                        istAngemeldet ?
                        <a.Typography className={classes.cursorPointer} onClick={signOut} sx={{fontWeight:'700', fontSize:'1.7rem', textAlign:'center', marginBottom:'20px'}}>
                            LOGOUT
                        </a.Typography> :
                        <a.Typography className={classes.cursorPointer} onClick={navigateToSignIn} sx={{fontWeight:'700', fontSize:'1.7rem', textAlign:'center', marginBottom:'20px'}}>
                            LOGIN
                        </a.Typography>
                    }
                </a.List>

                <a.Toolbar sx={{width:'300px', justifyContent: 'space-between'}}>
                    <a.IconButton edge="start" color="inherit" sx={{fontSize:4}}  aria-label="menu">
                        <icon.Twitter className={classes.cursorPointer} sx={{fontSize:'2.5rem'}}/>
                    </a.IconButton>
                    <a.IconButton edge="start" color="inherit" sx={{fontSize:'2.5rem'}}  aria-label="menu">
                        <icon.Facebook className={classes.cursorPointer} sx={{fontSize:'2.5rem'}}/>
                    </a.IconButton>
                    <a.IconButton edge="start" color="inherit" sx={{fontSize:'2.5rem'}}  aria-label="menu">
                        <icon.Instagram className={classes.cursorPointer} sx={{fontSize:'2.5rem'}}/>
                    </a.IconButton>
                </a.Toolbar>
            </a.Drawer>
    </>
    )
}