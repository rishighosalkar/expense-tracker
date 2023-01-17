import './App.css';
import Expenses from './components/Expenses/Expenses';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/SignUp/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Expenses />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
  );
}

export default App;
