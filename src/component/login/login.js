import React from 'react'
import "./login.css"
import { Button } from '@material-ui/core'
import {useStateValue} from '../../context/stateProvider';
import {actionTypes} from '../../context/reducer'
import {provider , auth} from "../../firebase";
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user,
            })
            console.log(result)
        }).catch((error) => alert(error.message));
    }
    return (
        <div className = "login">
            <div className = "login_logo">
                <img src="https://img.icons8.com/fluent/144/000000/facebook-new.png" alt = "" />
                <img src  = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/120px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>
            <Button type = "submit" onClick = {signIn}>
                sign in
            </Button>
        </div>
    )
}

export default Login
