import { createContext } from "react";

const LoginContext = createContext({
    usersExpenseData: [],
    loginhandler: (usr_id, userData) => {},
    logouthandler: ()=>{},
    onAddExpense: (newData) => {}
});

export default LoginContext;