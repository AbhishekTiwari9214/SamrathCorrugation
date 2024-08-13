// src/Banner.js
import React from 'react';
import './banner.css'; // Import the CSS file

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-text'>
        <h1>Your Box Partner</h1> 
        <p>Our corrugated boxes ensure your product is securely protected and more reliable.</p>
        <p className='moreText'>At Samrath Corrugation, we create durable, high-quality corrugated boxes designed to protect your products during transit and storage. Our expert team crafts custom packaging solutions tailored to your needs, ensuring reliability and safety at every step. Trust us to deliver exceptional packaging that enhances your product's integrity and your brand's reputation.</p>
      </div>
      <div className='banner-image'>
        <img src="corrugatedRobot.png" alt="Modern Design" />
      </div>
    </div>
  );
};

export default Banner;
                                                            