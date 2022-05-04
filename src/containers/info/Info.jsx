import './info.css';

import React from 'react';
import mockup from '../../assests/crawen-mockup-pc1.png'

const Header = () => {
  return (
    <div className="crawenOS__header section__padding" id="Information">
      <div className='crawenOS__header-content'>
        <h1 className="gradient__text">
          This is What You Require.
        </h1>
        <p>We started to design our own custom windows operating system. We are designing an OS that will make people feel safer and at the same time not need to do much. People who set up our system will not need to search for videos on youtube such as performance enhancement/upgrade. It will be a beautiful website, open to all. We are improving ourselves to support more and take firm steps. We plan to publish the toolbox and updates as open source in the updates we will make. In this way, I believe that we can get your help, too..</p>
      </div>
      <div className="crawenOS__header-image"> 
        <img src={mockup} alt='mockup'/>
      </div>
    </div>
  )
}

export default Header
