import './footer.css';

import React from 'react';
import logo from '../../assests/karma2.png'

const Footer = () => {
  return (
    <div className='crawenOS__footer section__padding' >
      <div className='crawenOS__footer-heading'>
        <h1 className='gradient__text2'>Closed Beta will be published within 1 week!</h1>
      </div>

      <div className='crawenOS__footer-btn'>
        <p>Not Available Yet :/</p>
      </div>   

      <div className='crawenOS__footer-links'>
        <div className='crawenOS__footer-links_logo'>
          <img src={logo} alt={logo} />
          <p>Dont Forget This Project In Still Alpha</p>
        </div>

        <div className='crawenOS__footer-links-div'>
          <h4>Links</h4>
          <a href="https://github.com/sertchan" target="_blank" rel="noopener noreferrer"> 
          <p>Github</p>
          </a>
          <a href="https://discord.com/invite/crawenos" target="_blank" rel="noopener noreferrer"> 
          <p>Discord!</p>
          </a>
          <a href="https://www.youtube.com/channel/UCn8O642viwA5s4KQjZjal_Q" target="_blank" rel="noopener noreferrer"> 
          <p>Youtube</p>
          </a>
        </div>

        <div className='crawenOS__footer-links-div'>
          <h4>Developers</h4>
          <p>Vojtass</p>
          <p>Seyhan</p>
          <p>Vac</p>
        </div>

        <div className='crawenOS__footer-links-div'>
          <h4>Suggested Repo's</h4>
          <a href="https://github.com/hellzerg/optimizer" target="_blank" rel="noopener noreferrer"> 
          <p>Optimizer</p>
          </a>
          <a href="https://github.com/bmrf/tron" target="_blank" rel="noopener noreferrer"> 
          <p>Tron</p>
          </a>
        </div>
      </div>

      <div className="crawenOS__footer-info">
      <p>@2022 CrawenOS. Close Alpha.</p>
    </div>

    </div>
  )
}

export default Footer