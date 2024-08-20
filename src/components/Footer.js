// src/components/Footer.js

import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved by shafa khan.</p>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
