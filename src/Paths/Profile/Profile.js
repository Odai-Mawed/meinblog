
//mui components
import * as a from '@mui/material';
import * as icon from '@mui/icons-material';

import { API, Storage, graphqlOperation } from 'aws-amplify';

import { Auth } from 'aws-amplify';

import React, {useState, useEffect} from 'react'

import {updateAuthor as uA} from '../../graphql/mutations'
import {getAuthor as gA} from '../../graphql/queries'

//styles
import useStyles from './css/css'

import logo from '../../logo.svg'
//import Header and footer
import Footer from '../../components/Footer/Footer';
import Header from '../../components/BlogHeader/BlogHeader'



var initialProfile = {
    id : '',
    firstName : '',
    lastName : '',
    email : ''
}
function Profile(){
    var classes = useStyles();
    var [profileData, setProfileData] = useState(initialProfile);

    async function changeModus(){
        var editButton = document.getElementById('editProfile');

        var editModus = document.getElementById('editModus');
        var activeModus = document.getElementById('activeModus');
        editModus.classList.toggle(classes.dontShow);
        activeModus.classList.toggle(classes.dontShow);
        if(activeModus.classList.contains(classes.dontShow)){
            editButton.innerText = 'speichern'
        } else {
            editButton.innerText = 'PROFILE BEARBEITEN'
        }

        if(editButton.innerText == 'speichern'){
            //await updateAuthor()
        }
    }
    function onChange(e){
        setProfileData({...profileData, [e.target.name] : e.target.value})
    }

    async function updateAuthor(){

        var updatedProfileData = {
            id : profileData.id,
            firstName : profileData.firstName,
            lastName : profileData.lastName,
            image : profileData.image
        }
        await API.graphql(graphqlOperation( uA,  {input : updatedProfileData}));
        if(profileData.image){
            const image = await Storage.get(profileData.image)
            profileData.image = image
        }
        setProfileData(initialProfile);
    }


    async function getAuthor(){
        var currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
        const apiData = await API.graphql({query: `
        query GetAuthor($id: ID!) {
            getAuthor(id: $id) {
            id
            firstName
            lastName
            image
            createdAt
            updatedAt
            owner
            }
        }
        `, variables : {id:currentAuthenticatedUser.attributes.sub}});
        var author = await apiData.data.getAuthor;
        await setProfileData({...profileData, id:currentAuthenticatedUser.attributes.sub, firstName:author.firstName, lastName:author.lastName, image:author.image, email:currentAuthenticatedUser  .attributes.email})

    }
 
    useEffect(async ()=>{
        await getAuthor();
    }, [])
    
    
    const editActiveModus = 
    <>
        <div id='editModus' className={classes.dontShow}>
            <a.Typography id={"vorname"} sx={{display:'flex', alignItems:'center', marginBottom:'10px'}} variant="body2" color="text.secondary"> 
                <span className={classes.abstand}><strong>Vorname:</strong></span> 
                <input type="text" name ='firstName' value={profileData.firstName} onChange={onChange}/>
            </a.Typography>
            <a.Typography id={"nachname"} sx={{display:'flex', alignItems:'center', marginBottom:'10px'}} variant="body2" color="text.secondary"> 
                <span className={classes.abstand}><strong>Nachname:</strong></span> 
                <input type="text" name ='lastName' value={profileData.lastName} onChange={onChange}/>
            </a.Typography>
            <a.Typography id={"email"} sx={{display:'flex', alignItems:'center'}} variant="body2" color="text.secondary">
                <div className={classes.abstand}>
                <icon.Email sx={{marginRight:'30px'}}/> 
                </div>
                <input type="text" name ='email' value={profileData.email} onChange={onChange}/>
            </a.Typography>
        </div>
    </>

    const defaultModus = 
    <div id='activeModus'>
    <a.Typography id={"name"} sx={{display:'flex', alignItems:'center', marginBottom:'10px'}} variant="body2" color="text.secondary"> 
        <span className={classes.abstand}><strong>Name:</strong></span> {profileData.firstName} {profileData.lastName}
    </a.Typography>
    <a.Typography id={"email"} sx={{display:'flex', alignItems:'center'}} variant="body2" color="text.secondary">
        <div className={classes.abstand}>
            <icon.Email sx={{marginRight:'30px'}}/> 
        </div>
        {profileData.email}
    </a.Typography>
    </div>
    
 
    
    return(
        <>
            <Header />
{console.log(profileData)}
            <a.Card className={classes.card} >

                <a.CardContent sx={{paddingTop: '35px', paddingRight:'35px', paddingLeft:'35px'}}>
                    <a.Typography gutterBottom variant="h4" component="div"
                        sx={{fontWeight:'600',  fontSize:'2rem', lineHeight:'2.5rem'}}>
                        Profile
                    </a.Typography>
                    <a.Typography sx={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'30px', marginBottom:'50px'}} variant="body2" color="text.secondary">
                        <a.Avatar src={logo}/>
                        Profilbild
                    </a.Typography>
                    {defaultModus}
                    {editActiveModus}
                </a.CardContent>
                <a.CardActions sx={{paddingButtom: '35px', paddingRight:'35px', paddingLeft:'35px'}}>
                    <a.Button id='editProfile' size="small" onClick={changeModus}>
                        PROFILE BEARBEITEN
                    </a.Button>
                </a.CardActions>
            </a.Card>
            <Footer/>
        </>
    )
}

export default Profile;