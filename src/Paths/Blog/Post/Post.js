//Costum Component GENERALS
import Header from '../../../components/BlogHeader/BlogHeader'
import Footer from '../../../components/Footer/Footer'
//COSTUM COMPONENT BLOG SPECIFIC
import PostMini from '../../../components/Blog/Post/PostMini'
import WhatCannIDoForYou from '../../../components/Blog/WhatCannIDoForYou'
import BlogMain from '../BlogMain'
import PostComponent from '../../../components/Blog/Post/PostComponent';
import Kommentar from '../../../components/Kommentar/Kommentar'
//mui components
import * as a from '@mui/material';

//Generals
import { useParams } from 'react-router';





function Post(){
    const { PostId } = useParams();
    console.log(PostId)
    return(
        <>
            <Header />
            <PostComponent />
            <Kommentar />
            <Footer />
        </>
    )
}



export default Post