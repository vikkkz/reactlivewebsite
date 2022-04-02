import React from 'react';
import Common from './Common'
import img from '../images/api-img.png'
// import { NavLink } from "react-router-dom";

function About() {
  
  return (
    <>
    <Common  
    name='welcome to about page' 
    imgsrc={img} 
    visit='/contact' 
    btname='Contact now'/>
    </>
  );
}

export default About;