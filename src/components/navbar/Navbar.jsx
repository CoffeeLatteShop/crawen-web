import './navbar.css';

import {RiCloseLin, RiMenu3Line} from 'react-icons/ri'

import React from 'react';
import logo from '../../assests/karma.png'

const Navbar = () => {
  return (
    <div className='crawenOS__navbar'>
      <div className='crawenOS__navbar-links'>
       <div className='crawenOS__navbar-links_logo'>
        <img src={logo} alt="logo"/>
       </div>
       <div className='crawenOS__navbar-links_container'>
          <p><a href="#Information">Information</a></p>
          <p><a href="#Features">Features</a></p>
          <p><a href="#Developers">Developers</a></p>
      </div>
      </div>
    </div>
  )
}

export default Navbar