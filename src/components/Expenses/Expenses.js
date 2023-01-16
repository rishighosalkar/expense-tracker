import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import './Expenses.css'
import './ExpenseFilter'
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import NewExpense from "../NewExpense/NewExpense";
import LoginContext from "../Context/Login/LoginContext";

const Expenses = (props) => {
    //console.log("Expense.js",props.items)
    const ctx = useContext(LoginContext);
    const [selectedYear, setSelectedYear] = useState('All');
    const [expenses, setExpenses] = useState([]);
    const temp =  localStorage.getItem('userData');
    const [userData, setUserData] = useState([]);
    const {usersExpenseData} = ctx;
    const [isAddExpense, setIsAddExpense] = useState(false);
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    useEffect(()=>{
        const user_id = localStorage.getItem('userId');
        console.log('InExpensesUseEffect', ctx.usersExpenseData);
        setUserData(usersExpenseData);
    }, [usersExpenseData]);
    
    const addExpenseHandler = async (enteredEpenseData) => {
        const temp = enteredEpenseData.date;
        const day = new Date(enteredEpenseData.date).getDate();
        const month = new Date(enteredEpenseData.date).getMonth() + 1;
        const year = new Date(enteredEpenseData.date).getFullYear();
        const date = month+'/'+day+'/'+year;
        enteredEpenseData.date = date;
        console.log(date);
        await axios.post('http://localhost:8081/expense/', enteredEpenseData)
            .then((res) => {
                console.log('NewUserExpenseData', res.data);
                //ctx.addExpenseSuccHandler(true);
                res = true;
            })
        .catch((err) => console.log(err));
        enteredEpenseData.date = temp;
        ctx.onAddExpense(enteredEpenseData);
    }
    const filterHandler = (year) => {
        setSelectedYear(year);
    }
    
    if(isLoggedIn) 
    {
        //setUserData(usersExpenseData)
        if(userData === [])
            return (<> <NewExpense onAddExpenseData = {addExpenseHandler}/>
            <h2 className="expenses-list__fallback">No data found.</h2> </>)
    }

    const filteredExpenses= (userData ? userData.filter(expense => {
        return new Date(expense.date).getFullYear().toString() === selectedYear || selectedYear === 'All'
    }) : []);

    return (
        <>
            <NewExpense onAddExpenseData = {addExpenseHandler}/>
            {isLoggedIn && 
            <div className='expenses'>
                <ExpenseFilter selected = {selectedYear} onYearFilter = {filterHandler}/>
                {selectedYear === 'All' ? <div></div>:<ExpenseChart expenses = {filteredExpenses} />}
                <ExpensesList items={filteredExpenses} />
            </div>
            }
        </>
    )
}

export default Expenses;