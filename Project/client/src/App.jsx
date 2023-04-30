import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './Components/Dashboard/SharedLayout';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Tests from './Components/Tests/Tests';
import Home from './Components/Dashboard/Home';
import { useLocation } from 'react-router-dom';

function App() {
  // const location = useLocation()
  // console.log(location.state.username);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>        
        <Route path='/dashboard' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='test' element={<Tests/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;