import React from 'react'
import * as a from '@mui/material';
import { createTheme } from '@mui/material/styles';
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