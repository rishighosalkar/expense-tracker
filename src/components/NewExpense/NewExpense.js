import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [isAddExpense, setIsAddExpense] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    // const location = useLocation();
    // console.log(location.state.user_id);
    useEffect(()=>{
        if(isLoggedIn === '1')
            setShowForm(true);
        else
            setShowForm(false);
    }, [isLoggedIn])
    const saveExpenseDataHandler = (enteredExpenseData) => {
        if(!(isLoggedIn === '1'))
            return alert('Please login!');
        const usr_id = localStorage.getItem('userId');
        //console.log(enteredExpenseData.date)
        const expenseData = {
            user_id: usr_id,
            ...enteredExpenseData
        };
        
        //console.log("NewExpense.js",expenseData.date);
        props.onAddExpenseData(expenseData);
        setIsAddExpense(false);
    } 

    const cancelExpenseDataHandler = () => {
        setIsAddExpense(false);
    } 
    const addExpenseButtonHandler = () => {
        if(isLoggedIn)
            setIsAddExpense(true)
        else
            alert('Please login')
    }
    const addExpenseButton = <div className="new-expense__action">
                                <button onClick={addExpenseButtonHandler}>Add Expense</button>
                            </div>
    return (
        <div className='new-expense'>
            {(isAddExpense && showForm) ? <ExpenseForm onCancel={cancelExpenseDataHandler} 
            onSaveExpenseData={saveExpenseDataHandler}/> : addExpenseButton}   
        </div>
    )
}

export default NewExpense;