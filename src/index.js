import './index.css';
import reportWebVitals from './reportWebVitals';
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter,
  Routes,
  Route } from "react-router-dom";

//import App from './App';
import Home from './Paths/Home/Home'
import Blog from './Paths/Blog/Blog'
import Post from './Paths/Blog/Post/Post'


function Component(){
  return(
    <>
      <div>
        <p>
          erster inhakt
        </p>
      </div>
    </>
  )
}
//<Route path="/" element={<Home />} />
//<Route path="Blog" element={<Blog />} />
//<Route path="Blog/:PostId" element={<Post />} />






ReactDOM.render( 
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Blog" element={<Blog />} />
    <Route path="Blog/:PostId" element={<Post />} />
  </Routes>
</BrowserRouter>,
  document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
