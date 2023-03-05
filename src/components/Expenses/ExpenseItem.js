import React from 'react'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseTitle = props.title;
    const expensePrice = props.amount;

    return (
        <li>
            <div className = "expense-item">
                <ExpenseDate date = {props.date} />
                <div className = "expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className = "expense-item__price">{'\u20B9'} {expensePrice}</div>
                    {/* <div className="expense-item__actions">
                        <button>Change Title</button>
                    </div> */}
                </div>
            </div>
        </li>
    )
}


export default ExpenseItem;