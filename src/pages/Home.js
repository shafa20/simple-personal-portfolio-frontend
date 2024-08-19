// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to home pageHome Page</h2>
      <p>This is where I showcase my projects and skills. Feel free to explore the different sections to learn more about me and my work.</p>
      <Link to="/content">
      <button>Create Content</button>
      </Link>
    
    </div>
  );
};

export default Home;
