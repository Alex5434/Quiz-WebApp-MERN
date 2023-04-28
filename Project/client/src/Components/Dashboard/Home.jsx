import React from 'react'
import { courses } from '../../Courses'
import MapCourses from './MapCourses'
import './Home.css'

const Home = () => {
  return (
    <article>
      <h1>Welcome back, Continue your path</h1>
      {courses.map(course=>{
        return <MapCourses data={course} key={course.cid}/>;
      })}
      
    </article>
  )
}

export default Home