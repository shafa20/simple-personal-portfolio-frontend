// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/blog/{blog-title}"> Blog Details</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
