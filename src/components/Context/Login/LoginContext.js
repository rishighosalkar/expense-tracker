import { createContext } from "react";

const LoginContext = createContext({
    usersExpenseData: [],
    onLogin: (usr_id, userData) => {},
    onLogout: ()=>{},
    onAddExpense: (newData) => {}
});

export default LoginContext;