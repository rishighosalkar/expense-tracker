import React from "react";
import SignupForm from "../SignupForm";
import classes from '../Signup.module.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupFirebase = (props) => {

    const navigate = useNavigate();
    const saveUserDataHandler = (enteredUserData) => {
        const userData = JSON.stringify(enteredUserData);
        console.log("Signup.js",userData);
        axios.post('https://expense-tracker-3406d-default-rtdb.firebaseio.com/users.json', enteredUserData)
            .then((res) => {
                navigate('/');
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
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

export default SignupFirebase;