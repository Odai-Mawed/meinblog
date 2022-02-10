//when you go to home path you will get this component 

import React from 'react'

//import header
import Header from '../../components/BlogHeader/BlogHeader'
//import Home Components
import HomeMain from './HomeMain'







function Home(){  
    return (
        <>
            <Header />
            <HomeMain />
        </>
    )
}


export default Home;