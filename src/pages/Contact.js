import React, { useEffect, useState } from 'react';
import '../components/css/Contact.css';

const Contact = () => {
  const [content, setContent] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch content from the API
    fetch('http://127.0.0.1:8000/api/pages')
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the API
    fetch('http://127.0.0.1:8000/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setSuccessMessage('Message has been saved to the database please check the messages table.');
          // Clear the form
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        } else {
          setSuccessMessage('Failed to save the message.');
        }
      })
      .catch((error) => {
        console.error('Error saving message:', error);
        setSuccessMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div className="contact-page">
      <h2>Contact Page</h2>
      <p>which content type is page you will see those list here</p>
      <ol>
        {content.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ol>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
