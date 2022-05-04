import './navbar.css';

import React, {useState} from 'react';
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri'

import logo from '../../assests/karma.png'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='crawenOS__navbar'>
      <div className='crawenOS__navbar-links'>
       <div className='crawenOS__navbar-links_logo'>
        <img src={logo} alt="logo"/>
       </div>
       <div className='crawenOS__navbar-links_container'>
          <p><a href="#Information">Information</a></p>
          <p><a href="#wcrawenos">CrawenOS?</a></p>
          <p><a href="#Features">Features</a></p>
      </div>
      <div className="crawenOS__navbar-download">
        <button class="glow-on-hover" type="button">Download</button>
      </div>
      <div className="crawenOS__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="crawenOS__navbar-menu_container scale-up-center">
          <div className="crawenOS__navbar-menu_container-links">
          <p><a href="#Information">Information</a></p>
          <p><a href="#wcrawenos">CrawenOS?</a></p>
          <p><a href="#Features">Features</a></p>
          <p><a href="#FutureIsNow">Future Is Now</a></p>
          </div>
         <div className="crawenOS__navbar-download">
           <button class="glow-on-hover" type="button">Download</button>
          </div>
        </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Navbar