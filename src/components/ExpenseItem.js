import React from 'react'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function Expense(props) {
    const expenseTitle = props.title;
    const expensePrice = props.amount;
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className = "expense-item">
            <ExpenseDate date = {props.date} />
            <div className = "expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className = "expense-item__price">${expensePrice}</div>
            </div>
        </div>
    )
}


export default Expense;