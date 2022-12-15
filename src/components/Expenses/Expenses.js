import React, { useState } from "react";
import './Expenses.css'
import './ExpenseFilter'
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    console.log("Expense.js",props.items)
    const [selectedYear, setSelectedYear] = useState('All');
    const filterHandler = (year) => {
        setSelectedYear(year);
        console.log("Expense.js", year);
    }
    console.log("Expense.js", selectedYear);
    const filteredExpenses = props.items.filter(expense => {
        return new Date(expense.date).getFullYear().toString() === selectedYear || selectedYear === 'All'
    })
    return (
        <div className='expenses'>
            <ExpenseFilter selected = {selectedYear} onYearFilter = {filterHandler}/>
            {selectedYear === 'All' ? <div></div>:<ExpenseChart expenses = {filteredExpenses} />}
            <ExpensesList items={filteredExpenses} />
        </div>
    )
}

export default Expenses;