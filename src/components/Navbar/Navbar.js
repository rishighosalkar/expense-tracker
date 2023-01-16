import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../Context/Login/LoginContext";

const Navbar = () => {

    const ctx = useContext(LoginContext);
    let loggedState = 'Log in'
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const navigateToLogin = () => {
        if(isLoggedIn === '1')
        {
            navigate('/');
            ctx.onLogout();
            //localStorage.clear()
        }
        else {
            navigate('/login');
        }
    }

    if(isLoggedIn === '1')
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