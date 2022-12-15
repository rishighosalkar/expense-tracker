import React, { useContext, useState } from "react";
import LoginContext from "../Context/Login/LoginContext";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const isLogged = useContext(LoginContext);
    const [isAddExpense, setIsAddExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log("NewExpense.js",expenseData);
        props.onAddExpenseData(expenseData);
        setIsAddExpense(false);
    } 

    const cancelExpenseDataHandler = () => {
        setIsAddExpense(false);
    } 
    const addExpenseButtonHandler = () => {
        if(isLogged.loggedState)
            setIsAddExpense(true)
        else
            alert('Please login')
    }
    const addExpenseButton = <div className="new-expense__action">
                                <button onClick={addExpenseButtonHandler}>Add Expense</button>
                            </div>
    return (
        <div className='new-expense'>
            {isAddExpense ? <ExpenseForm onCancel={cancelExpenseDataHandler} 
            onSaveExpenseData={saveExpenseDataHandler}/> : addExpenseButton}   
        </div>
    )
}

export default NewExpense;