import React, {useState} from "react";
import LoginContext from "./LoginContext";

const LoginState = (props) => {
    // const isLoggedStatus = {
    //     isLogged : false
    // }

    const [loggedState, setLoggedState] = useState(false);

    const updateLoggedState = (state) => {
        const temp = (loggedState ? false : true);
        setLoggedState(temp);
    }

    return(
        <LoginContext.Provider value={{loggedState, updateLoggedState}}>
            {props.children}
        </LoginContext.Provider>
    )

}

export default LoginState;