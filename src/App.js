
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './components/cards';
import Home from './components/home';
import Navbar from './components/navbar';
import Signin from './components/signin'

function App() {
  return (
    <Routes>
      <Route path='/ciudades' element={
        <div>
          <Navbar></Navbar>
          <Cards></Cards>
        </div>
      }/>
      <Route path='/' element={
        <div>
          <Navbar></Navbar>
          <Home></Home>
        </div>
      }/>
      <Route path='/login' element={
        <div>
          <Navbar></Navbar>
          <Home></Home>
        </div>
      }/>
      <Route path='/signin' element={
        <div>
          <Navbar></Navbar>
          <Signin></Signin> 
        </div>
      }/>
    </Routes>
  );
}

export default App;
