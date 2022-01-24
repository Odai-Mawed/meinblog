import Header from '../../components/BlogHeader/BlogHeader'
import HomeMain from './HomeMain'


import { withAuthenticator } from '@aws-amplify/ui-react'


function Home(){
    return (
        <>
            <Header />
            <HomeMain />
        </>
    )
}


export default withAuthenticator(Home);