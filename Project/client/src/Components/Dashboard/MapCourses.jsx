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
  const [correct, setcorrect] = useState(1)
  const arr = test;
  const [id, setId] = useState(1);
  const [courseStart, setcourseStart] = useState(false)
  
  
  
  
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
          let markedAnswer = '';
          const markAnswer = (e)=>{
            markedAnswer = e.target.value;
          }
          const nextQuiz = ()=>{
              if(markedAnswer===test.ans){
                setcorrect(correct+1)
              }
              setId(id+1);
            }
            const handleSubmit = ()=>{
              if(markedAnswer===test.ans){
                setcorrect(correct+1)
              }
              console.log("your score is"+correct);
              setcorrect(1)
              setId(1);
              setcourseStart(false)
          }
          return(
            <div className='ques-container' key={test.ansid}>
              <div className="heading">
                <h3>{test.qname}</h3>
                <CloseIcon className='close-btn' onClick={()=>{
                  setcourseStart(false)
                  setId(1);
                  }}/>
              </div> 
              <div className='option-container'>
                {test.options.map((opt,index)=>{
                  return<input type='button' value={opt} key={index} className='options' onClick={markAnswer}/>
                })} 
              </div>
              <div className='action-buttons'>
                {(id!==arr.length) && <button onClick={nextQuiz} >Next</button>}
              </div>
              {id===arr.length && <button className='submit-btn' onClick={handleSubmit}>Submit</button>}
            </div>
            
          )
        }
      })

  )}
    </div>
  )
}

export default MapCourses