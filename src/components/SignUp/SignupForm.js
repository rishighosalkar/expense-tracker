import React, { useRef } from "react";
import bcrypt from 'bcryptjs';
import classes from './SignupForm.module.css';

const SignupForm = (props) => {

    // const [enteredUserName, setUsername] = useState('');
    // const [enteredFirstName, setFirstname] = useState('');
    // const [enteredLastName, setLastname] = useState('');
    // const [enteredPassword, setPassword] = useState('');
    // const [enteredMobileNumber, setMobileNumber] = useState('');
    // const [enteredDate, setDate] = useState('');

    // const firstNameChangeHandler = (e) => {
    //     setFirstname(e.target.value)
    // }

    // const lastNameChangeHandler = (e) => {
    //     setLastname(e.target.value)
    // }

    // const usernameChangeHandler = (e) => {
    //     setUsername(e.target.value)
    // }

    // const passwordChangeHandler = (e) => {
    //     setPassword(e.target.value)
    // }

    // const dateChangeHandler = (e) => {
    //     setDate(e.target.value)
    // }

    // const mobileNumberChangeHandler = (e) => {
    //     setMobileNumber(e.target.value)
    // }
    const fNameInputRef = useRef();
    const lNameInputRef = useRef();
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const mobileNumberInputRef = useRef();
    const dobInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const password = passwordInputRef.current.value
        const hashedPassword = bcrypt.hashSync(password, 10);
        const userData = {
            fName: fNameInputRef.current.value,
            lName: lNameInputRef.current.value,
            username: usernameInputRef.current.value,
            password: hashedPassword,
            mobileNumber: mobileNumberInputRef.current.value,
            dateOfBirth: dobInputRef.current.value
        }
        props.onSaveUserData(userData);
        
        // setFirstname('');
        // setLastname('');
        // setUsername('');
        // setPassword('');
        // setMobileNumber('');
        // setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className= {classes.signup__controls}>
                <div className = {classes.signup__control}>
                    <label>First Name</label>
                    <input type='text' ref={fNameInputRef} />
                </div>
                <div className = {classes.signup__control}>
                    <label>Last Name</label>
                    <input type='text' ref={lNameInputRef}/>
                </div>
                <div className = {classes.signup__control}>
                    <label>Username</label>
                    <input type='text' ref={usernameInputRef}/>
                </div>
                <div className = {classes.signup__control}>
                    <label>Password</label>
                    <input type='password' minLength="6" 
                    ref={passwordInputRef}/>
                </div>
                <div className = {classes.signup__control}>
                    <label>Mobile Number</label>
                    <input type='number' 
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    ref={mobileNumberInputRef}/>
                </div>
                <div className = {classes.signup__control}>
                    <label>Date</label>
                    <input type='date' ref={dobInputRef}/>
                </div>
            </div>
            <div className={classes.signup__actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Save User</button>
            </div>
        </form>
    )
}

export default SignupForm;