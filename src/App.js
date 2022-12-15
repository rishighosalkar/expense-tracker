import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useContext, useState } from 'react';
import LoginContext from './components/Context/Login/LoginContext';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/SignUp/Signup';
import { Routes, Route } from 'react-router-dom';

const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
function App() {
  const [expenses, setExpenses] = useState(dummyData);
  const loggedState = useContext(LoginContext);

  const addExpenseHandler = (enteredEpenseData) => {
    setExpenses(prevExpenses => {
      return [enteredEpenseData, ...prevExpenses]
    })
    //expenses = expenseData;
    //setExpenses(expenseData)
    console.log(expenses);
  }
  
  return (
      <div className="App">
        <Navbar />
        {/* <NewExpense onAddExpenseData = {addExpenseHandler}/> */}
        {/* <Signup /> */}
        <Routes>
          <Route exact path='/' element={<NewExpense onAddExpenseData = {addExpenseHandler}/>}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
        {loggedState.loggedState && <Expenses items={expenses} />}
      </div>
  );
}

export default App;
