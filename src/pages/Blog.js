// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the backend
    const fetchBlogs = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/blogs');
      setBlogs(response.data.data);
    };

    fetchBlogs();
  }, []);

 

  return (
    <div>
      <h2>Blog Page</h2>
      <p>which content type is blog you will see those list here</p>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blog/${(blog.title)}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
