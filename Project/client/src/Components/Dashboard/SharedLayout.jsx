import React, { useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router';


const SharedLayout = () => {
  const location = useLocation();
  // const userName = location.state.username

  return (
    <>
      <Navbar/>    
      <h3 className='gap'>Nav</h3>
      <Outlet/>
    </>
  )
}

export default SharedLayout