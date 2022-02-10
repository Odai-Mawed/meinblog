import { Auth } from 'aws-amplify';
import ConfirmSignUp from './ConfirmSignUp'
import { useNavigate } from "react-router-dom";
import { createAuthor } from '../../graphql/mutations';

import { API, Storage, graphqlOperation } from 'aws-amplify';
import useStyles from './css/css'


let formInputState = { username: '', password: '', email: '', verificationCode: '' };
function onChange(e) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value };
}

function SignUp(){
    let navigate = useNavigate();
    var classes = useStyles();

    async function signUp(){
        try {
            await Auth.signUp({
              username: formInputState.username,
              password: formInputState.password,
              attributes: {
                email: formInputState.email,
                'custom:isAuthor': 'false'
            }});

            navigate('/ConfirmSignup')
            /* Once the user successfully signs up, update form state to show the confirm sign up form for MFA */
        } catch (err) { console.log({ err }); }
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
                type="password"
                onChange={onChange}
            />
            <input
                className={classes.eingabeFeld}
                name="email"
                placeholder="email"
                onChange={onChange}
            />
            <button className={classes.signInButton} onClick={signUp}>Sign Up</button>
        </div>
        </>
    )
    
}


export default SignUp;