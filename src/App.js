import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Profile from './Pages/Profile';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    
      <Router>
      <Navbar/>
      <div>
      <Routes>
        <Route path = '/' element = {<Profile/>}/>
        <Route path = '/Projects' element = {<Projects/>}/>
        <Route path = '/Contact' element = {<Contact/>}/>
      </Routes>
      </div>
      <Footer/>
      </Router>
   
  );
}



export default App;
