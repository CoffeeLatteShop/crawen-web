import './features.css';

import { Feature } from '../../components';
import React from 'react';

const featuresData = [
  {
    title: 'Always Feel in Safe',
    text: 'The ISO files we have released to you are open source and published by Microsoft.',
  },
  {
    title: 'Low Memory and CPU Usage',
    text: 'It has been optimized to reduce usage power on all systems.',
  },
  {
    title: 'Configurator App',
    text: 'Our app allows you to install or delete the services you want. XBOX, Microsoft Store, WiFi, Bluetooth etc.',
  },
  {
    title: 'Standalone Update Support',
    text: 'We will bring you all the updates that Microsoft has released!',
  },
];



const Features = () => {
  return (
    <div className="crawenOS__features section__padding" id="features">
      <div className="crawenOS__features-heading">
         <h1 className="gradient__text4">Everything was designed for you to be happy after the installation. Use it!</h1>
        <p>Request Early Acces Get Started Within 1 week!</p>
      </div>
      <div className="crawenOS__features-container">
        {
          featuresData.map((item, index) => 
            <Feature title={item.title} text={item.text} key = {item.title + index}/>
          )
        }
      </div>
    </div>
  )
}

export default Features