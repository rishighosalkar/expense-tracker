import React, { useContext, useEffect, useRef, useState } from "react";
import LoginContext from "../Context/Login/LoginContext";
import { useNavigate } from "react-router-dom";
import bcrypt from 'bcryptjs';
import classes from './Login.module.css'
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    const [users, setUsers] = useState([]);
    const [firebaseUsers, setFirebaseUsers] = useState([]);
    const ctx = useContext(LoginContext);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await axios.get('http://localhost:8081/user')
            const res1 = await axios.get('https://expense-tracker-3406d-default-rtdb.firebaseio.com/users.json')
            console.log('ResponseData',res1.data)
            const resData = await res.data;
            const loadedData = [];
            const loadedDataFireBase = [];
            for(const key in res1.data)
            {
                console.log('LoginUsersKeys',res1.data[key].username + ' ' + key+' '+res1.data[key].mobileNumber); 
                loadedDataFireBase.push({
                    _id:key,
                    username: res1.data[key].username,
                    password: res1.data[key].password,
                    fName: res1.data[key].fName,
                    lName: res1.data[key].lName,
                    mobileNumber: res1.data[key].mobileNumber,
                    dateOfBirth: res1.data[key].dateOfBirth
                })  
            }
            for(const key in resData)
            {
                //console.log('LoginUsersKeys',resData[key].username);
                loadedData.push({
                    _id:resData[key]._id,
                    username: resData[key].username,
                    password: resData[key].password,
                    fName: resData[key].fName,
                    lName: resData[key].lName,
                    mobileNumber: resData[key].mobileNumber,
                    dateOfBirth: resData[key].dateOfBirth
                })   
            }
            setUsers(loadedData);
            setFirebaseUsers(loadedDataFireBase);
        }
        fetchData()
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;
        //console.log(users)
        users.filter((userData) =>{ 
        return userData.username === username}
        ).map((userData) => (
            bcrypt.compare(password, userData.password, (err, isMatch) => {
                if(err) throw err
                else if(!isMatch){
                    alert('Incorrect Password');
                    navigate('/login');
                }
                else{
                    ctx.onLogin(userData._id);
                    navigate('/', {state : {user_id: userData._id}});
                }
            })
            //console.log("Login userdata", userData);
        ))
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