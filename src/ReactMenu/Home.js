import React from 'react'
import img from '../images/home_hero.png'
// import { NavLink } from "react-router-dom";
import Common from './Common'


function Home() {
  
  return (
    <>
    <Common 
    name='Grow your knowledge with ' 
    imgsrc={img} 
    visit='/service' 
    btname='Get started' /><br></br>
    <div className='g1'>
    
    </div>
    </>
  );
}

export default Home;