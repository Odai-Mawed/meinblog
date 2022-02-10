//Generals
import { useParams } from 'react-router';
import React, {useState, useEffect} from 'react'

//import header and footer
import Header from '../../../components/BlogHeader/BlogHeader'
import Footer from '../../../components/Footer/Footer'

//import components we need for the post path
import PostComponent from '../../../components/Blog/Post/PostComponent';
import Kommentar from '../../../components/Kommentar/Kommentar'

//import mui components wich we need to make the job easer
import * as a from '@mui/material';

//import AWS packages to communicate with the backend
import { API, Storage, graphqlOperation } from 'aws-amplify';

import { getPost } from '../../../graphql/queries';




var initialPost = {
  id: '',
  title: '',
  summary: '',
  content: '',
  judgement: 0,
  image: '',
  imageDescription: '',
  comments: {
    items : []
  },
  createdAt: '',
  updatedAt: '',
  blogPostsId: '',
  owner: ''

}

function Post(){
    const { PostId } = useParams();
    const [post, setPost] = useState(initialPost);

    useEffect(async () => {
          await getPost()
    }, []);


    async function getPost(){
        const apiData = await API.graphql({query: `
        query GetPost($id: ID!) {
          getPost(id: $id) {
            id
            title
            summary
            content
            judgement
            image
            imageDescription
            blog {
              id
              name
              createdAt
              updatedAt
              owner
            }
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
      `, variables : {id:PostId}});
        const postFromAPI = [apiData.data.getPost];
        await Promise.all(postFromAPI.map(async post=>{
            if(post.image){
                const image = await Storage.get(post.image);
                post.image = image
            }
            return post
        }))
        setPost(apiData.data.getPost)
    }

    return(
          <>
            <Header /> 

            <PostComponent post={post}/>

            <Kommentar postID={PostId} />
            
            <Footer />
        </>
    )
}



export default Post