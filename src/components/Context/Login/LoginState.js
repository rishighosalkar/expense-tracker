import React, {useEffect, useState} from "react";
import LoginContext from "./LoginContext";

const defaultState = {
    userData: []
}
const LoginState = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [expenseData, setExpenseData] = useState([]);
    const addExpenseHandler = (userData) => {
        setExpenseData(prevExpenses => {
              return [userData, ...prevExpenses]
            })
        console.log('addExpenseHandler',expenseData);
    }
    const loginhandler = (user_id, userData) => {
        //localStorage.setItem('userData', usersExpenseData);
        localStorage.setItem('userId', user_id);
        //localStorage.setItem('userId', user_id);
        localStorage.setItem('isLoggedIn', '1');
        const loadedData = [];
        for(const key in userData)
        {
            //console.log(userData[key]);
            loadedData.push({
                user_id: userData[key].user_id,
                title: userData[key].title,
                date: userData[key].date,
                amount: userData[key].amount,
            })
        }
        //console.log('InLoginStateProps.js',expenseData);
        setExpenseData(loadedData);
        console.log('InLoginStateData.js',loadedData);
        setIsLoggedIn(true);
    }

    const logouthandler = () => {
        //localStorage.removeItem('userData');
        localStorage.removeItem('userId');
        localStorage.removeItem('isLoggedIn');
        localStorage.clear();
        setIsLoggedIn(false);
    }

    return(
        <LoginContext.Provider value={{isLoggedIn:isLoggedIn,
            usersExpenseData: expenseData,
            onAddExpense: addExpenseHandler,
            onLogin: loginhandler, 
            onLogout: logouthandler}}>
            {props.children}
        </LoginContext.Provider>
    )

}

export default LoginState;