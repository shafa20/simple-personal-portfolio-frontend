// src/pages/Home.js
import React from 'react';
import ApiData from '../ApiData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to home pageHome Page</h2>
     
      <Link to="/content">
      <button>Create Content</button>
      </Link>
      <ApiData />
    </div>
  );
};

export default Home;
