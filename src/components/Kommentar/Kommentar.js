//Generals 
import React, {useState, useEffect} from 'react';

//mui components
import * as a from '@mui/material';

//styles
import { styled, alpha } from '@mui/material/styles';
import useStyles from './css/css';
//icons
import SearchIcon from '@mui/icons-material/Search';

//media
import odaiBild from './media/odai.jpg'

//ein div wird gestylt
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '50%',
    display: 'flex',
    backgroundColor: 'antiquewhite',
    padding: '10px 0px'
    
}));


const KommentarPostenText = styled('span')(({ theme }) => ({
    padding: '5px',
    fontWeight: '200',
    color: 'blue',
    fontSize: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}));


const StyledInputBase = styled(a.InputBase)(({ theme }) => ({
    '& ::placeholder': {
        color : 'red'
    },
    width: 'auto',
    flex: 'auto',
    paddingLeft: '30px'
})); 

const KommentarErstellungsDatum = styled('span')(({theme})=>({
    fontSize : '0.5rem',
    paddingLeft : '30px'
}));



function Kommentator(){
    var classes = useStyles();
    return(
        <>
            <a.Toolbar sx={{alignItems:'flex-start', width: '100%', margin: '35px 0px', wordBreak: 'break-word'}}>
                <a.Avatar src={odaiBild} sx={{width: '55px', height: 'auto'}}>

                </a.Avatar>
                <div>

                
                    <a.Typography sx={{paddingLeft: '30px', maxWidth: 'none', flex: 'auto'}}>
                        <span className={classes.kommentatorName}>
                            odai Al Moued
                        </span>
                            es war ein echt schöner Beitrag!! danke sehr :)) kasfjsdkfsdfsd

                            sd
                            sd
                            f
                            sd

                            sd


                            khsjdkfhsdfjhksajhslhdfasufusdfhsdfjksdfhasdhfashudflhasdfhsdaf
                            sdklfasjndfasdhjhsdaafsdasdjsdjfhsjkfjsdfhjsdjfhjsdfjhsdfkjhsdhfsdjfhjkdshfsdkhfdsfhksdfhsdkhfhdksfhsdfk
                            sadfkjsadnsd
                            <br/>
                            sdcsdcsdc   
                    </a.Typography>
                    <KommentarErstellungsDatum >
                        vor einer woche
                    </KommentarErstellungsDatum>
                </div>
            </a.Toolbar>
        </>
    )
}



function Kommentar(){
    var classes = useStyles();

    return(
        <>  
            <a.Typography>
                SCHREIBEN SIE EIN KOMMENTAR
            </a.Typography>
            <div className={classes.KommentatorenContainer}>
                <Kommentator></Kommentator>
                <Kommentator></Kommentator>
                <Kommentator></Kommentator>
                <Kommentator></Kommentator>
                <Kommentator></Kommentator>
                <Kommentator></Kommentator>
            </div>
            <div>

                <Search>
                    <StyledInputBase placeholder='Schreiben...'></StyledInputBase>
                    <KommentarPostenText>Posten</KommentarPostenText>
                </Search>
            </div>
        </>
    )
}



export default Kommentar;