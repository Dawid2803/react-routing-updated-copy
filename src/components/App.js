import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//App components
import Home from './Home'
import About from './About'
import Header from './Header'
import Teachers from './Teachers'
import Courses from './Courses'
import NotFound from './NotFound'
import Featured from './Featured';



const App = () => (

  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/about" element={ <About title="About" />} />
        <Route path="/teachers" element={ <Teachers />} />
        <Route path="/teachers/:topic/:name" element={ <Featured />} />
        <Route path="/courses/*" element={ <Courses />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;