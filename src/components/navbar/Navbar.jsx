import './navbar.css';

import {RiCloseLin, RiMenu3Line} from 'react-icons/ri'

import React from 'react';
import logo from '../../assests/logo.png'

const Navbar = () => {
  return (
    <div className='crawenOS__navbar'>
      <div className='crawenOS__navbar-links'>
       <div className='crawenOS__navbar-links_logo'>
        <img src={logo} alt="logo"/>
       </div>
       <div className='crawenOS__navbar-links_container'>
          <p><a href="#whatCrawenOS">What is crawenOS?</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#Goals">Goals</a></p>
          <p><a href="#Devolopers">Devolopers</a></p>
          <p><a href="#Discord">Discord</a></p>
          <p><a href="#Youtube">Youtube</a></p>
      </div>
      </div>
    </div>
  )
}

export default Navbar