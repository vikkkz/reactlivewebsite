import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './ReactMenu/Home'
import About from './ReactMenu/About'
import Contact from './ReactMenu/Contact'
import Service from './ReactMenu/Service'
import Nav from "./Navbar";
import { Routes , Route , Navigate } from "react-router-dom"



function App() {
  
  return (
    <>
    <Nav />
    <Routes>
    <Route  exact path="/" element={<Home/>} />
    <Route exact path="/about" element={<About/>} />
    <Route  exact path="/contact" element={<Contact/>} />
    <Route exact path="/service" element={<Service/>} />
    <Route path='*' element={<Navigate to="/" replace />} />
    
    
    </Routes>
    
    </>
  );
}

export default App;
