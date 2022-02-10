import React, {useState, useEffect} from 'react'
import { API, Storage, graphqlOperation } from 'aws-amplify';

import { listBlogs, listAuthors, listPosts, listComments, getPost } from './graphql/queries';
import {createAuthor as cA, updateAuthor as uA, createBlog as cB, createPost as cP, createComment as cC} from './graphql/mutations';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';


const randomColor = function(){
    var c = '';
    while (c.length < 7) {
      c += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    return '#' + c;
}


const initialAuthor = {
    id : '',
    firstName : '',
    lastName : '',
    image : ''
};
function CreateAuthor(){
    const [authorData, setAuthorData] = useState(initialAuthor);
    const [authoren, setAuthoren] = useState([]);


    useEffect(async () => {
        await fetchAuthors();
    }, []);

    async function fetchAuthors(){
        const apiData = await API.graphql({ query: listAuthors });
        const authorsFromApi = apiData.data.listAuthors.items;
        await Promise.all(authorsFromApi.map(async author=>{
            if(author.image){
                const image = await Storage.get(author.image);
                author.image = image
            }
            return author
        }))
        setAuthoren(apiData.data.listAuthors.items)
    }

    async function authorErstellen(){
        if(!authorData.id){
            return;
        }
        await API.graphql(graphqlOperation( cA,  {input : authorData}));
        if(authorData.image){
            const image = await Storage.get(authorData.image)
            authorData.image = image
        }
        setAuthoren([...authoren, authorData]);
        setAuthorData(initialAuthor);
    }

    async function updateAuthor(){

        await API.graphql(graphqlOperation( uA,  {input : authorData}));
        if(authorData.image){
            const image = await Storage.get(authorData.image)
            authorData.image = image
        }
        setAuthoren([...authoren, authorData]);
        setAuthorData(initialAuthor);
    }

    async function onChange(e){
        if(!e.target.files[0]){
            return;
        }
        const image = e.target.files[0];
        setAuthorData({...authorData, image : image.name});
        await Storage.put(image.name, image);
        fetchAuthors()
    };



    
    return(
        <>
            
            <input type="text" placeholder="id" onChange={e=>setAuthorData({...authorData,id: e.target.value})}/>
            <input type="text" placeholder="firstName" onChange={e=>setAuthorData({...authorData,firstName: e.target.value})}/>
            <input type="text" placeholder="lastName" onChange={e=>setAuthorData({...authorData,lastName: e.target.value})}/>
            <input type='file' onChange={onChange}/>
            <button onClick={authorErstellen}>Erstelle einen Author</button>
            <br/>
            <input type="text" placeholder="id" onChange={e=>setAuthorData({...authorData,id: e.target.value})}/>
            <input type="text" placeholder="firstName" onChange={e=>setAuthorData({...authorData,firstName: e.target.value})}/>
            <input type="text" placeholder="lastName" onChange={e=>setAuthorData({...authorData,lastName: e.target.value})}/>
            <input type='file' onChange={onChange}/>
            <button onClick={updateAuthor}>aktualisiere einen Author</button>
            <div>
                {
                    
                    authoren.map( author => (
                        <>
                        {console.log(author)}
                        <div key={author.id}>
                            <h1>{author.id}</h1>
                            <h1>{author.firstName}</h1>
                            <h1>{author.lastName}</h1>
                            {
                                author.image && <img src={author.image} style={{width: 100}} />
                            }
                        </div>
                        </>
                    ))
                }
            </div>
        </>
    )
} 



const initialBlog = {
    id : '',
    name : '',
};

function CreateBlog(){
    const [blogData, setBlogData] = useState(initialBlog);
    const [blogs, setBlogs] = useState([]);

    useEffect(async () => {
        await fetchBlogs();
    }, []);


    async function fetchBlogs(){
        const apiData = await API.graphql({ query: listBlogs });
        const blogsFromAPI = apiData.data.listBlogs.items;

        setBlogs(blogsFromAPI)
    }


    async function blogErstellen(){
        if(!blogData.id){
            return;
        }
        await API.graphql(graphqlOperation( cB,  {input : blogData}));
        setBlogs([...blogs, blogData]);
        setBlogData(initialBlog);
    }

    return(
        <>
            
            <input type="text" placeholder="id" onChange={e=>setBlogData({...blogData,id: e.target.value})}/>
            <input type="text" placeholder="name" onChange={e=>setBlogData({...blogData,name: e.target.value})}/>
            <button onClick={blogErstellen}>Erstelle einen Blog</button>
            <div>
                {
                    blogs.map( blog => (
                        <div key={blog.id}>
                            <h1>{blog.id}</h1>
                            <h1>{blog.name}</h1>
                            {
                                blog.posts.items.map(post =>(
                                    <div>

                                        <p>{post.content}</p>
                                        {
                                            post.comments.items.map(comment=>(
                                                <div>
                                                    <p>{comment.content}</p>
                                                    <p>{comment.author.firstName}</p>
                                                    <p>{comment.author.lastName}</p>

                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }


            </div>
        </>
    )
}


const initialPost = {
    id : '',
    title: '',
    content : '',
    summary: '',
    judgement: 0,
    image: '',
    imageDescription: '',
    blogPostsId: ''
};

function CreatePost(){
    const [postData, setPostData] = useState(initialPost);
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

    async function postErstellen(){
        if(!postData.id){
            return;
        }
        await API.graphql(graphqlOperation( cP,  {input : postData}));
        if(postData.image){
            const image = await Storage.get(postData.image)
            postData.image = image
        }
        setPosts([...posts, postData]);
        setPostData(initialPost);
    }

    async function onChange(e){
        if(!e.target.files[0]){
            return;
        }
        const image = e.target.files[0];
        setPostData({...postData, image : image.name});
        await Storage.put(image.name, image);
        fetchPosts()
    };


    return(
        <>
            
            <input type="text" placeholder="id" onChange={e=>setPostData({...postData,id: e.target.value})}/>
            <input type="text" placeholder="title" onChange={e=>setPostData({...postData,title: e.target.value})}/>
            <input type="text" placeholder="content" onChange={e=>setPostData({...postData,content: e.target.value})}/>
            <input type="text" placeholder="summary" onChange={e=>setPostData({...postData,summary: e.target.value})}/>
            <input type="text" placeholder="judgement" onChange={e=>setPostData({...postData,judgement: e.target.value})}/>
            <input type='file' onChange={onChange}/>
            <input type="text" placeholder="imageDescription" onChange={e=>setPostData({...postData,imageDescription: e.target.value})}/>
            <input type="text" placeholder="blogPostsId" onChange={e=>setPostData({...postData,blogPostsId: e.target.value})}/>
            <button onClick={postErstellen}>Erstelle einen Post</button>
            <div style={{backgroundColor: randomColor()}}>
                {
                    posts.map( post => (
                        <div key={post.id}>
                            <h1>{post.id}</h1>
                            <h1>{post.title}</h1>
                            <h1>{post.content}</h1>
                            <h1>{post.summary}</h1>
                            <h1>{post.judgement}</h1>
                            {
                                post.image && <img src={post.image} style={{width: 100}} />
                            }
                            <h1>{post.imageDescription}</h1>
                        </div>
                    ))
                }


            </div>
        </>
    )
}


const initialComment = {
    id : '',
    content : '',
    authorID : '',
    postCommentsId : ''
};
function CreateComment(){
    const [commentData, setCommentData] = useState(initialComment);
    const [comments, setComments] = useState([]);

    useEffect(async () => {
        await fetchComments();
    }, []);


    async function fetchComments(){
        const apiData = await API.graphql({ query: listComments });
        const commentsFromAPI = apiData.data.listComments.items;

        setComments(commentsFromAPI)
    }


    async function commentErstellen(){

        await API.graphql(graphqlOperation( cC,  {input : commentData}));
        setComments([...comments, commentData]);
        setCommentData(initialComment);
    }

    return(
        <>

            <input type="text" placeholder="id" onChange={e=>setCommentData({...commentData,id: e.target.value})}/>
            <input type="text" placeholder="content" onChange={e=>setCommentData({...commentData,content: e.target.value})}/>
            <input type="text" placeholder="authorID" onChange={e=>setCommentData({...commentData,authorID: e.target.value})}/>
            <input type="text" placeholder="postCommentsId" onChange={e=>setCommentData({...commentData,postCommentsId: e.target.value})}/>
            <button onClick={commentErstellen}>Erstelle einen Comment</button>
            <div>
                {
                    comments.map( comment => (
                        <div key={comment.id}>
                            <h1>{comment.id}</h1>
                            <h1>{comment.content}</h1>
                        </div>
                    ))
                }
            </div>
        
        </>
    )
}


function GetOnePost(){
    const [post, setPost] = useState({});

    useEffect(async () => {

        await getPost();
    }, []);


    async function getPost(){
        console.log('hallo')
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
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
            owner
          }
        }
      `, variables : {id:"2"}});
        const postFromAPI = apiData.data.getPost;
        if(postFromAPI.image){
            const image = await Storage.get(post.image);
            postFromAPI.image = image
        }
          
        setPost(apiData.data.getPost)
    }
    return(
        <>
            <p>{post.id}</p>
            <p>{post.content}</p>
        </>
    )
}

function Test(){
    var user =  Auth.currentAuthenticatedUser();

    return(
        <>
            <CreateAuthor />
        </>
    )
}



export default withAuthenticator(Test);