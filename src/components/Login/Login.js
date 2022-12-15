import React, { useContext, useEffect, useRef, useState } from "react";
import LoginContext from "../Context/Login/LoginContext";
import { useNavigate } from "react-router-dom";
import classes from './Login.module.css'
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const [users, setUsers] = useState([]);
    const isLogged = useContext(LoginContext);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        isLogged.updateLoggedState();
        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;

        let users = [];
        axios.get('http://localhost:8081/user')
                                .then((res)=> {
                                    users = res.data;
                                    console.log(res)
                                })
                                .catch((err)=> console.log(err));
        console.log(users)
        users.filter((userData) =>{ 
        return userData.username === username}
        ).map(userData => {
            console.log("Login userdata", userData);
        })
        console.log("In login",isLogged.loggedState)
        navigate('/');
    }
    
    const navigateToSignup = (e) => {
        navigate('/signup')
        console.log("In SignUp")
    }
    return(
        <form onSubmit={onSubmitHandler} className={classes.container}>
            <div className={classes.login__controls}>
                <div className={classes.login__control}>
                    <label>Username</label>
                    <input type='text' ref={usernameInputRef}/>
                </div>
                <div className={classes.login__control}>
                    <label>Password</label>
                    <input type='password' ref={passwordInputRef}/>
                </div>
                <div className={classes.login__actions}>
                    <button onClick={navigateToSignup}>Sign Up</button>
                    <button type='submit'>Login</button>
                </div>
            </div>
        </form>
    )
}

export default Login;