//react general packages
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react'

import ReactDOM from 'react-dom';
//import packages to solve route problems
import { BrowserRouter,
  Routes,
  Route } from "react-router-dom";

//import path components
import Home from './Paths/Home/Home'
import Blog from './Paths/Blog/Blog'
import Post from './Paths/Blog/Post/Post'
import Test from './Test'
import Anmelden from './Paths/Anmdelden'
import Amplify from 'aws-amplify';
import config from './aws-exports';
import SignUp from './components/Auth/SignUp';
import ConfirmSignUp from './components/Auth/ConfirmSignUp';
import SignIn from './components/Auth/SignIn';
import Profile from './Paths/Profile/Profile';
Amplify.configure(config);





ReactDOM.render( 
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Blog" element={<Blog />} />
    <Route path="Blog/:PostId" element={<Post />} />
    <Route path="Test" element={<Test />} />
    <Route path="anmdelden" element={<Anmelden />} />
    <Route path="SignUp" element={<SignUp />} />
    <Route path="ConfirmSignUp" element={<ConfirmSignUp />} />
    <Route path="SignIn" element={<SignIn />} />
    <Route path="Profile" element={<Profile />} />
  </Routes>
</BrowserRouter>,
  document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
