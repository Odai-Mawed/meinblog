//Costum Component GENERALS
import Header from '../../components/BlogHeader/BlogHeader'
import Footer from '../../components/Footer/Footer'
//COSTUM COMPONENT BLOG SPECIFIC
import PostMini from '../../components/Blog/Post/PostMini'
import WhatCannIDoForYou from '../../components/Blog/WhatCannIDoForYou'
import BlogMain from './BlogMain'

//mui components
import * as a from '@mui/material';
















function Blog(){

    return (
        <>
            <Header></Header>
            <BlogMain />
            <a.Grid container>
                {
                    [...Array(4).keys()].map((i)=>(
                        <PostMini postId={i} />
                    ))
                }

            </a.Grid>

            <WhatCannIDoForYou />
            <Footer />

        </>
    )
}


export default Blog