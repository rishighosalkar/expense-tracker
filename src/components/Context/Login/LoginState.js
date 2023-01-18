import React, { useState} from "react";
import LoginContext from "./LoginContext";
import axios from "axios";

const LoginState = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [expenseData, setExpenseData] = useState([])

    const loginhandler = (user_id) => {
        localStorage.setItem('userId', user_id);
        localStorage.setItem('isLoggedIn', '1');
        const fetchData = async () => {
            //const expenseRes = await axios.get('http://localhost:8081/expense/');
            const expenseRes = await axios.get('https://expense-tracker-3406d-default-rtdb.firebaseio.com/expenses.json');
            const expenseResData = expenseRes.data;
            console.log("EXPENSEKEY", expenseResData.data)
            const loadedExpenseData = [];
            for(const key in expenseResData)
            {
                //console.log("EXPENSEKEY", expenseResData[key].user_id)
                if(expenseResData[key].user_id === user_id)
                {
                    loadedExpenseData.push({
                        user_id: expenseResData[key].user_id,
                        title: expenseResData[key].title,
                        date: expenseResData[key].date,
                        amount: expenseResData[key].amount,
                    })
                }
            }
            setExpenseData(loadedExpenseData);
        }
        if(isLoggedIn)
            fetchData();
        setIsLoggedIn(true);
    }

    const logouthandler = () => {
        //localStorage.removeItem('userData');
        setExpenseData([]);
        localStorage.removeItem('userId');
        localStorage.removeItem('isLoggedIn');
        localStorage.clear();
        setIsLoggedIn(false);
    }

    return(
        <LoginContext.Provider value={{isLoggedIn:isLoggedIn,
            usersExpenseData: expenseData,
            onLogin: loginhandler, 
            onLogout: logouthandler}}>
            {props.children}
        </LoginContext.Provider>
    )

}

export default LoginState;