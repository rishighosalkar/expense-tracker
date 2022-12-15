import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
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

    const addExpenseButton = <div className="new-expense__action">
                                <button onClick={()=>{setIsAddExpense(true)}}>Add Expense</button>
                            </div>
    return (
        <div className='new-expense'>
            {isAddExpense ? <ExpenseForm onCancel={cancelExpenseDataHandler} 
            onSaveExpenseData={saveExpenseDataHandler}/> : addExpenseButton}   
        </div>
    )
}

export default NewExpense;