import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        }
        props.onSaveExpenseData(expenseData); 
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="1" step="1" onChange={amountChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Save Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;