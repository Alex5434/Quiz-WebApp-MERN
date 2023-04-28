import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './Home.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios'

const MapCourses = ({data}) => {
  const location = useLocation()
  const AddTest = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:4000/dashboard/addcourse',
    {
      username:location.state.username,
      cid:data.cid,
      coursename:data.cname,
      level:data.difficulty,
      score:0,
      completed:false,
      attempted:true,
    })
    console.log(location.state.username);
  }
  return (
    <div className="course">
      <h2>{data.cname}</h2>
      <div className="time">
        <AccessAlarmIcon style={{color:"green"}}/>
        <h3>{data.duration}</h3>
      </div>
      <div className="difficulty">
        <SignalCellularAltOutlinedIcon style={{color:`${data.dcolor}`}}/>
        <h3>{data.difficulty}</h3>
      </div>
      <button className='sub-btn' onClick={AddTest}>Start <EastOutlinedIcon/></button>
    </div>
  )
}

export default MapCourses