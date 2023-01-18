import './App.css';
import Expenses from './components/Expenses/Expenses';
import ExpensesFirebase from './components/Expenses/Firebase/ExpensesFirebase';
import Login from './components/Login/Login';
import LoginFirebase from './components/Login/Firebase/LoginFirebase';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/SignUp/Signup';
import SignupFirebase from './components/SignUp/Firebase/SignupFirebase';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Expenses />}></Route> Mongodb*/}
          <Route exact path='/' element={<ExpensesFirebase />}></Route>
          {/* <Route exact path='/signup' element={<Signup />}></Route> */}
          <Route exact path='/signup' element={<SignupFirebase />}></Route>
          {/* <Route path='/login' element={<Login />}></Route> Mongodb*/}
          <Route path='/login' element={<LoginFirebase />}></Route>
        </Routes>
      </div>
  );
}

export default App;
