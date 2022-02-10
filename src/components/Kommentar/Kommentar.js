import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid'

//mui components
import * as a from '@mui/material';
//styles
import { styled, alpha } from '@mui/material/styles';
import useStyles from './css/css';

import { API, Storage, graphqlOperation } from 'aws-amplify';
import { Auth } from 'aws-amplify';

import {createComment as cC} from '../../graphql/mutations'
import {listComments} from '../../graphql/queries'

//das gesamte eingabefeld zum kommentieren
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    display: 'flex',
    backgroundColor: '#e0e5e5bd',
    padding: '10px 0px'
    
}));

//das kommentieren button
const KommentarPostenText = styled('span')(({ theme }) => ({
    padding: '5px',
    fontWeight: '200',
    color: 'blue',
    fontSize: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer'
}));

//das genaue eingabefeld zum kommentieren
const StyledInputBase = styled(a.InputBase)(({ theme }) => ({
    '& ::placeholder': {
        color : 'red'
    },
    width: 'auto',
    flex: 'auto',
    paddingLeft: '30px'
})); 

//Der text der erscheint, wenn jemand was kommentiert hat und uns darüber informiert wann
const KommentarErstellungsDatum = styled('span')(({theme})=>({
    fontSize : '0.5rem',
    paddingLeft : '30px'
}));



function Kommentator(props){
    const [authoren, setAuthoren] = useState([])


    var classes = useStyles();

    useEffect(async ()=>{
        await getKommentatorImage()

    }, [])

    async function getKommentatorImage(){
        await Promise.all([props.comment.author].map(async author=>{
            if(author.image){
                const image = await Storage.get(author.image);
                author.image = image
            }
            return author
        }))
        setAuthoren([props.comment.author])
    }
    return(
        <>
            <a.Toolbar sx={{alignItems:'flex-start', margin: '35px 0px', wordBreak: 'break-word'}}>
                <a.Avatar src={props.comment.author.image} sx={{width: '55px', height: 'auto'}}>

                </a.Avatar>
                <div>

                
                    <a.Typography sx={{paddingLeft: '30px', maxWidth: 'none', flex: 'auto'}}>
                        <span className={classes.kommentatorName}>
                            {props.comment.author.firstName}
                        </span>
                        {props.comment.content}
                    </a.Typography>
                    <KommentarErstellungsDatum >
                        vor einer woche
                    </KommentarErstellungsDatum>
                </div>
            </a.Toolbar>
        </>
    )
}


let formInputState = { };
function onChange(e) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value };
}
function Kommentar(props){
    var [istAngemeldet, setIstAngemeldet] = useState(false);
    var [kommentare, setKommentare] = useState([]);
    var classes = useStyles();

    

    async function erstelleKommentar(){
        if(istAngemeldet){
            var kommentarInput = document.getElementById('kommentarInput');
            var c = await createCommentData();
            await API.graphql(graphqlOperation( cC,  {input : c}));
            kommentarInput.value = ""
            await getCommentsForPost();
        }else{
            alert(`Sie sind leider nicht angemeldet und
            dürfen leider noch keine Kommentare schreiben! melden Sie sich ersmal an!`)
        }

    }

    async function getCommentsForPost(){
        const apiData = await API.graphql({query: `
        query GetPost($id: ID!) {
          getPost(id: $id) {
            comments {
              items {
                content
                createdAt
                id
                author {
                  firstName
                  id
                  image
                  lastName
                }
              }
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
        }
      `, variables : {id:props.postID}});
        const commentsFromAPI = [apiData.data.getPost.comments.items];
        await Promise.all(commentsFromAPI.map(async comment=>{
            console.log(comment)
            if(comment.author){
                const image = await Storage.get(comment.author.image);
                comment.author.image = image
            }
            return comment
        }))
        setKommentare(apiData.data.getPost.comments.items)
    }

  
    async function createCommentData(){
        var user = await Auth.currentAuthenticatedUser();
        
        var comment = await {
            id : uuid(),
            content : formInputState.kommentarInhalt,
            authorID : user.attributes.sub,
            postCommentsId : props.postID
        }
        return comment
    }

    async function lookIfUserIsAngemeldet(){
        try{
            var user = await Auth.currentAuthenticatedUser();
            if(user){
                setIstAngemeldet(true);
                console.log(user)
            }
        }catch(error){
            setIstAngemeldet(false);
            console.log('Der User ist nicht angemeldet', error);
        }
    }

    async function test(){
        await getCommentsForPost();
        console.log(kommentare);
    }

    useEffect(async()=>{
        await lookIfUserIsAngemeldet();
        await getCommentsForPost();
    }, [])

    return(
        <>  
            <a.Typography 
                sx={{fontSize:'1.5rem',
                fontWeight:'700',
                margin:'10px auto',
                textAlign:'center'}}>
                SCHREIBEN SIE EIN KOMMENTAR
            </a.Typography>

            <div className={classes.kommentatorenContainer}>
                {kommentare.map(komment=>(
                    <Kommentator comment={komment} />
                ))}
            </div>
            <div className={classes.searchBoxContainer}>
                <Search>
                    <StyledInputBase id='kommentarInput' placeholder='Schreiben...' name='kommentarInhalt' onChange={onChange} />

                    <KommentarPostenText onClick={erstelleKommentar}>Posten</KommentarPostenText> 
                </Search>
            </div>
        </>
    )
}



export default Kommentar;