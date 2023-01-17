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
    const ctx = useContext(LoginContext);
    const [selectedYear, setSelectedYear] = useState('All');
    const [userData, setUserData] = useState([]);
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const {usersExpenseData} = ctx;
    useEffect(()=>{
        const fetchData = async () => {
            const expenseRes = await axios.get('http://localhost:8081/expense/');
            const expenseResData = expenseRes.data;
            console.log("EXPENSEKEY", expenseResData.data)
            const loadedExpenseData = [];
            const usr_id = localStorage.getItem('userId');
            for(const key in expenseResData)
            {
                //console.log("EXPENSEKEY", expenseResData[key].user_id)
                if(expenseResData[key].user_id === usr_id)
                {
                    loadedExpenseData.push({
                        user_id: expenseResData[key].user_id,
                        title: expenseResData[key].title,
                        date: expenseResData[key].date,
                        amount: expenseResData[key].amount,
                    })
                }
            }
            setUserData(loadedExpenseData);
        }
        if(isLoggedIn)
            fetchData();
    }, [usersExpenseData, isLoggedIn]);
    
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
                res = true;
            })
        .catch((err) => console.log(err));
        enteredEpenseData.date = temp;
        setUserData(prevExpenses => {
                return [enteredEpenseData, ...prevExpenses]
        })
        console.log('InAddExpenseExpensejs', userData);
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