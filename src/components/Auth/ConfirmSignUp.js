import { Auth } from 'aws-amplify';
import SignIn from './SignIn'
import { useNavigate } from "react-router-dom";

let formInputState = { username: '', password: '', email: '', verificationCode: '' };
function onChange(e) {
    formInputState = { ...formInputState, [e.target.name]: e.target.value };
}

function ConfirmSignUp(props){
    let navigate = useNavigate();

    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(formInputState.username, formInputState.verificationCode);
          /* Once the user successfully confirms their account, update form state to show the sign in form*/
          navigate('/SignIn')

        } catch (err) { console.log({ err }); }
    }

        return(
            <>
            <div>
                <input
                  name="username"
                  placeholder="username"
                  onChange={onChange}
                />
                <input
                  name="verificationCode"
                  placeholder="verificationCode"
                  onChange={onChange}
                />
                <button onClick={confirmSignUp}>Confirm Sign Up</button>
            </div>
            </>
        )
    

}


export default ConfirmSignUp;