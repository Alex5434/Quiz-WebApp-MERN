import {React, useState} from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './Home.css'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './MapCourses.css'

const MapCourses = ({data}) => {
  const test = data.questions;
  const [id, setId] = useState(1);
  const [courseStart, setcourseStart] = useState(false)

  const nextQuiz = ()=>{
    console.log("Next Button");
    setId(id+1);
  }
  const prevQuiz = ()=>{
    console.log("prev Button");
    setId(id-1);
  }
  const CheckAnswer = ()=>{

  }
  
  const location = useLocation()
  const AddTest = (e)=>{
    e.preventDefault();
    // axios.post('http://localhost:4000/dashboard/addcourse',
    // {
    //   username:location.state.username,
    //   cid:data.cid,
    //   coursename:data.cname,
    //   level:data.difficulty,
    //   score:0,
    //   completed:false,
    //   attempted:true,
    // })
    console.log(test);
    setcourseStart(true)
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
      <button className='sub-btn' onClick={AddTest}>Start<EastOutlinedIcon/></button>
      {courseStart && (
      test.map((test)=>{
        if(id===test.ansid){
          return(
            <div className='ques-container'>
              <div className="heading">
                <h3 heading>{test.qname}</h3>
                <CloseIcon className='close-btn' onClick={()=>{setcourseStart(false)}}/>
              </div>
              <div className='option-container'>
                {test.options.map((opt)=>{
                  return<div className='options'>
                      {opt}
                  </div>
                })}
              </div>
              <div>
                {id!==1 && <button onClick={prevQuiz}>Prev</button>}
                {id!==test.length && <button onClick={nextQuiz}>Next</button>}
                {id===test.length && <button>Submit</button>}
              </div>
              <button onClick={()=>{console.log()}}>Check</button>
            </div>
            
          )
        }
      })

  )}
    </div>
  )
}

export default MapCourses