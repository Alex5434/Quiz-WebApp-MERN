import {React, useState} from 'react'
// import axios from 'axios'
import test from './List';

const Just = () => {
  const [id, setId] = useState(1);
  const arr = test;

  const nextQuiz = ()=>{
    console.log("Next Button");
    setId(id+1);
  }
  return (
      test.map((test)=>{
        if(id===test.id){
          return(
            <div>
              <h3>{test.name}</h3>
              <div>
                {test.options.map((opt)=>{
                  return<div>
                    <label>{opt}</label>
                    <input type="radio" name={opt} />
                  </div>
                })}
              </div>
              <div>
                {id!==1 && <button onClick={prevQuiz}>Prev</button>}
                {id!==arr.length && <button onClick={nextQuiz}>Next</button>}
                {id===arr.length && <button>Submit</button>}
              </div>
              <button onClick={()=>{console.log()}}>Check</button>
            </div>
            
          )
        }
      })

  )
}

export default Just