import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/css/content_page.css'; // Import the CSS file

const ContentPage = () => {
  const [contents, setContents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    type: 'page',
    content: '',
    status: 'published',
  });
  const [editingId, setEditingId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    const response = await axios.get('http://localhost:8000/api/contents');
    setContents(response.data.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:8000/api/contents/${editingId}`, formData);
        setSuccessMessage('Content updated successfully');
      } else {
        await axios.post('http://localhost:8000/api/contents', formData);
        setSuccessMessage('Content created successfully');
      }
      fetchContents();
      setFormData({
        title: '',
        type: 'page',
        content: '',
        status: 'published',
      });
      setEditingId(null);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (content) => {
    setFormData(content);
    setEditingId(content.id);
    setSuccessMessage(''); // Clear any previous success message
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/contents/${id}`);
      fetchContents();
      setSuccessMessage('Content deleted successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeSuccessMessage = () => {
    setSuccessMessage('');
  };

  return (
    <div className="content-page">
      <h2>Manage Contents</h2>
      {successMessage && (
        <div className="success-message">
          <span>{successMessage}</span>
          <button className="close-button" onClick={closeSuccessMessage}>×</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <select name="type" value={formData.type} onChange={handleInputChange}>
          <option value="page">Page</option>
          <option value="blog">Blog</option>
        </select>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Content"
          required
        />
        <select name="status" value={formData.status} onChange={handleInputChange}>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Content</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr key={content.id}>
              <td>{content.title}</td>
              <td>{content.type}</td>
              <td>{content.content}</td>
              <td>{content.status}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(content)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(content.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentPage;
