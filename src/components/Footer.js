import React from 'react';
import './footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul>
          <li>Types of Box</li>
          <li>Contact Us</li>
          <li>Home Page</li>
        </ul>
      </div>
      <div className="footer-right">
        <img src="logo.png" alt="Your Logo" className="footer-logo" />
        <p style={{fontSize:'10px'}}>© Reserve Copyright</p>
      </div>
    </footer>
  );
}

export default Footer;
