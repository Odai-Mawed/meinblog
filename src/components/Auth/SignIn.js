import { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { API, Storage, graphqlOperation } from 'aws-amplify';
import {createAuthor as cA} from '../../graphql/mutations';

import useStyles from './css/css'

let formInputState = { username: '', password: '', email: '', verificationCode: '' };
function onChange(e) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value };
}

function SignIn(){
    let navigate = useNavigate();

    var classes = useStyles();
    async function signIn() {
        try {
          await Auth.signIn(formInputState.username, formInputState.password);
          /* Once the user successfully signs in, update the form state to show the signed in state */
          var user = await getAuthenticatedUserData();
          if(user.attributes['custom:isAuthor'] == 'true'){
            console.log(user)
            navigate('/');
          } else {
            await createAuthor(user);
            await updateUser();
            navigate('/');
          }

        } catch (err) { console.log({ err }); }
    }
    async function createAuthor(userData){
        if(!userData.username){
            return;
        }
        var author = await {
            id : userData.attributes.sub,
            firstName : userData.username,
            lastName : ' '
        }
        await API.graphql(graphqlOperation( cA,  {input : author}));
        console.log('author wurde erfolgreich erstellt')
    }

    async function getAuthenticatedUserData(){
        var {username, attributes} = await Auth.currentAuthenticatedUser();
        var userData = {username : username, attributes : attributes}
        return userData;
    
    }


    async function updateUser() {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, {
            'custom:isAuthor': 'true'
        });
    }
    return(
        <>
        <div className={classes.container}>
            <input
              className={classes.eingabeFeld}
              name="username"
              placeholder="username"
              onChange={onChange}
            />
            <input
              className={classes.eingabeFeld}
              name="password"
              placeholder="password"
              onChange={onChange}
            />
            <button className={classes.signInButton} onClick={signIn}>Sign In</button>
            <a className={classes.signUpATag} href='/SignUp'>Sign Up</a>
        </div>
        </>
    )
}


export default SignIn;