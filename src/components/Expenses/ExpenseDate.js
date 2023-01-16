import React from 'react';
import './ExpenseDate.css'

export default function ExpenseDate(props) {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]
    const day = new Date(props.date).getDate();
    //const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const month = new Date(props.date).getMonth()+1;
    //const month = props.date.toLocaleString('en-US', {month: 'long'});
    const year = new Date(props.date).getFullYear();
    console.log('Month',new Date(props.date).getMonth())
    return (
        <div className = "expense-date">
            <div className = "expense-date__month">{month}</div>
            <div className = "expense-date__year">{year}</div>
            <div className = "expense-date__day">{day}</div>
        </div>
    )
}
