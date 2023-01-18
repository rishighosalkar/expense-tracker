import React from "react";
import SignupForm from "./SignupForm";
import classes from './Signup.module.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {

    const navigate = useNavigate();
    const saveUserDataHandler = (enteredUserData) => {
        //const userData = JSON.stringify(enteredUserData);
        //console.log("Signup.js",userData);
        axios.post('http://localhost:8081/user', enteredUserData)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                alert(err);
                navigate('/signup');
            });
    } 

    const cancelSignupDataHandler = () => {
        navigate('/login');
    } 

    return (
        <div className={classes.signup}>
            <SignupForm onCancel={cancelSignupDataHandler} 
            onSaveUserData={saveUserDataHandler}/> 
        </div>
    )
}

export default Signup;