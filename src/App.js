
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './components/cards';
import Form from './components/form';
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
      <Route path='/form' element={
        <div>
          <Form></Form>
        </div>
      }/>
    </Routes>
  );
}

export default App;
