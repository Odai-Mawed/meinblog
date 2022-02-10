import React from 'react'
//import mui components
import * as a from '@mui/material';

//import the header logo and header right section componennts
import HeaderLogo from './BlogHeaderLogo';
import HeaderRechts from './BlogHeaderRechts';







function Header(){

    return(
        <>
            <a.AppBar position="static" sx={{backgroundColor: '#222222'}}>
                <a.Toolbar variant="dense" sx={{justifyContent:'space-between', minHeight:70}} >
                    <HeaderLogo/>
                    <HeaderRechts/>
                </a.Toolbar>
            </a.AppBar>
        </>

    )
}




export default Header