import React, { useEffect, useState } from 'react';

const About = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Fetch content from the API
    fetch('http://127.0.0.1:8000/api/contents')
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setContent(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching content:', error);
      });
  }, []);

  return (
    <div>
      <h2>About Page</h2>
      <p>content type is page or blog you will see both list here</p>
      <ol>
        {content.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default About;
