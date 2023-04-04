import React, { useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router';



const DashBoard = () => {
  const location = useLocation();
  const userName = location.state.username

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default DashBoard