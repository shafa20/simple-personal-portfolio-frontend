// src/pages/BlogDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {
  const { title } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch blog content using the title from the URL
        const response = await axios.get(`http://localhost:8000/api/contents/blog/${title}`);
        setBlogs(response.data.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchBlogs();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (blogs.length === 0) {
    return <div>No blogs found</div>;
  }

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
