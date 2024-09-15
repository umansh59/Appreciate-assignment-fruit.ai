import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Faq.css';

const FAQUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faq, setFaq] = useState(null);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    image: null,
    image_custom_name: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const public_faq_get_api = process.env.REACT_APP_FAQ_GET_API;
  const faq_update_api = process.env.REACT_APP_FAQ_PUT_API;
  const faq_delete_api = faq_update_api;

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(public_faq_get_api);
        const faqs = response.data;
        const singleFaq = faqs.find((faq) => faq.id === parseInt(id));
        if (singleFaq) {
          setFaq(singleFaq);
          setFormData({
            question: singleFaq.question,
            answer: singleFaq.answer,
            image: null,
            image_custom_name: singleFaq.image_custom_name || '',
          });
        } else {
          setError('FAQ not found.');
        }
      } catch (error) {
        console.error('Error fetching FAQs:', error.response ? error.response.data : error.message);
        setError('Failed to fetch FAQs.');
      }
    };

    fetchFaqs();
  }, [id, public_faq_get_api]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const username = prompt('Enter username:', '');
    const password = prompt('Enter password:', '');

    if (!username || !password) {
      alert('Username and password are required.');
      return;
    }

    const data = new FormData();
    data.append('question', formData.question);
    data.append('answer', formData.answer);
    data.append('image', formData.image);
    data.append('image_custom_name', formData.image_custom_name);

    try {
      await axios.put(`${faq_update_api}${id}/`, data, {
        auth: {
          username: username.trim(),
          password: password.trim(),
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('FAQ updated successfully!');
      navigate('/faq'); 
    } catch (error) {
      console.error('Updating FAQ failed:', error.response ? error.response.data : error.message);
      setError('Failed to update FAQ.');
    }
  };

  const handleDelete = async () => {
    const username = prompt('Enter username: "umansh-admin"', '');
    const password = prompt('Enter password: "admin"', '');

    if (!username || !password) {
      alert('Username and password are required.');
      return;
    }

    try {
      await axios.delete(`${faq_delete_api}${id}/`, {
        auth: {
          username: username.trim(),
          password: password.trim(),
        },
      });
      setSuccess('FAQ deleted successfully!');
      navigate('/faq'); 
    } catch (error) {
      console.error('Deleting FAQ failed:', error.response ? error.response.data : error.message);
      setError('Failed to delete FAQ.');
    }
  };

  if (!faq) {
    return <p>Loading...</p>;
  }

  return (
    <div className="faq-container">
      <div className='faq-form'>
      <h2>Update FAQ</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            name="question"
            value={formData.question}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="answer">Answer:</label>
          <textarea
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            className='img-form'
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="image_custom_name">Image Custom Name:</label>
          <input
            type="text"
            id="image_custom_name"
            name="image_custom_name"
            value={formData.image_custom_name}
            onChange={handleInputChange}
          />
        </div>
        <button className='faq-form-btn' type="submit">Update FAQ</button>
        <button className='faq-form-btn' type="button" onClick={handleDelete}>Delete FAQ</button>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default FAQUpdate;
