import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../Context/Login/LoginContext";

const Navbar = () => {

    const isLogged = useContext(LoginContext);
    let loggedState = 'Log in'
    const navigate = useNavigate();
    const navigateToLogin = () => {
        if(loggedState === 'Log out')
        {
            navigate('/');
            isLogged.updateLoggedState();
        }
        else navigate('/login');
    }

    if(isLogged.loggedState)
    {  
        loggedState = 'Log out';
    }
    return(
        <div>
          <button onClick={navigateToLogin}>
              {loggedState}
          </button>
        </div>
    )
}

export default Navbar;