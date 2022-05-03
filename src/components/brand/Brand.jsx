import './brand.css';

import { buymeacoffe, discord, facebook, telegram, youtube } from './imports';

import React from 'react';

const Brand = () => {
  return (
    <div className='crawenOS__brand section__padding'>
      <div>
        <img src={youtube} alt="youtube"/>
      </div>
          <div>
        <img src={facebook} alt="facebook"/>
      </div>
            <div>
        <img src={discord} alt="discord"/>
      </div>
            <div>
        <img src={telegram} alt="telegram"/>
      </div>
            <div>
        <img src={buymeacoffe} alt="buymeacoffe"/>
      </div>
    </div>
  )
}

export default Brand