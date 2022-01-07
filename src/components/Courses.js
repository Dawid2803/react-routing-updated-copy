import React from 'react';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import CourseContainer from './courses/CourseContainer';


import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';


const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/*  routes ... */}
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/courses/html" />} />
        <Route path="/html" element={ <CourseContainer data={HTMLCourses} />}>HTML</Route>
        <Route path="/css" element={ <CourseContainer data={CSSCourses} />}>HTML</Route>
        <Route path="/javascript" element={ <CourseContainer data={JSCourses} />}>HTML</Route>
      </Routes>
  </div>
);

export default Courses;