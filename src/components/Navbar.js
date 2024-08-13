// src/Navbar.js
import React from 'react';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src="/logo.png" alt="Logo" />
        <a href="/" className='nav-link'>Samrath Corrugation</a>
      </div>
      <div className='nav-links'>
        <a href="/" className='nav-link'>Home</a>
        <a href="/types" className='nav-link'>Types of Boxes</a>
        <a href="/contact" className='nav-link'>Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
