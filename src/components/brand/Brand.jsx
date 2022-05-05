import './brand.css';

import { buymeacoffe, discord, facebook, telegram, youtube } from './imports';

import React from 'react';

const Brand = () => {
  return (
    <div className='crawenOS__brand section__padding'>
      <div>
        <a href="https://www.youtube.com/channel/UCn8O642viwA5s4KQjZjal_Q" target="_blank" rel="noopener noreferrer"> 
        <img src={youtube} alt="youtube"/>
        </a>
      </div>
          <div>
        <a href="https://fb.me/crawenOS" target="_blank" rel="noopener noreferrer">     
        <img src={facebook} alt="facebook"/>
        </a>
      </div>
            <div>
        <a href="https://discord.com/invite/crawenos" target="_blank" rel="noopener noreferrer">           
        <img src={discord} alt="discord"/>
        </a>   
      </div>
            <div>
         <a href="https://t.me/crawenOS" target="_blank" rel="noopener noreferrer">      
        <img src={telegram} alt="telegram"/>
        </a>
      </div>
            <div>
        <a href="https://buymeacoffee.com/crawenOS" target="_blank" rel="noopener noreferrer">                 
        <img src={buymeacoffe} alt="buymeacoffe"/>
        </a>
      </div>
    </div>
  )
}

export default Brand