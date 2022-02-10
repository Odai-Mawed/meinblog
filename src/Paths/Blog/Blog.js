import React, {useState, useEffect} from 'react'

//import Header and footer
import Header from '../../components/BlogHeader/BlogHeader'
import Footer from '../../components/Footer/Footer'

//import important component for the blog path
import PostMini from '../../components/Blog/Post/PostMini'
import WhatCannIDoForYou from '../../components/Blog/WhatCannIDoForYou'
import BlogMain from './BlogMain'

//import mui components wich we need to make the job easer
import * as a from '@mui/material';

//import AWS packages to communicate with the backend
import { API, Storage } from 'aws-amplify';

//import function tolist all Post of a blog
import { listPosts } from '../../graphql/queries';














function Blog(){
    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        await fetchPosts();
    }, []);


    async function fetchPosts(){
        const apiData = await API.graphql({ query: listPosts });
        const postsFromAPI = apiData.data.listPosts.items;
        await Promise.all(postsFromAPI.map(async post=>{
            if(post.image){
                const image = await Storage.get(post.image);
                post.image = image
            }
            return post
        }))
        setPosts(apiData.data.listPosts.items)
    }

    return (
        <>
            <Header/>

            <BlogMain />

            <a.Grid container>
                {
                    posts.map((post)=>(
                        <>
                            <PostMini postId={post.id} title={post.title} summary={post.summary} imgSrc={post.image}/>
                        </>
                    ))
                }

            </a.Grid>

            <WhatCannIDoForYou />
            
            <Footer />

        </>
    )
}


export default Blog