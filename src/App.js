import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <>
    <Routes>
      <Route path='/List' element={<List />}/> 
       <Route path="/" element={<Signup/>}  />
       <Route path="/Login" element={<Login/>}/>
     </Routes>



    </>
    
  );
}

export default App;
