import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FAQForm = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [image, setImage] = useState(null); 
    const [imageCustomName, setImageCustomName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleFileChange = (e) => {
        setImage(e.target.files[0]); 
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prompt for credentials
        const username = prompt('Enter username: "umansh-admin"', '');
        const password = prompt('Enter password: "admin"', '');

        if (!username || !password) {
            alert('Username and password are required.');
            return;
        }

        const url = process.env.REACT_APP_FAQ_POST_API;
        
        const formData = new FormData();
        formData.append('question', question);
        formData.append('answer', answer);
        formData.append('image', image); 
        formData.append('image_custom_name', imageCustomName);

        try {
            const response = await axios.post(url, formData, {
                auth: {
                    username: username.trim(),
                    password: password.trim()
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('FAQ created:', response.data);
            setSuccess('FAQ created successfully!');
            navigate('/faq')
            setQuestion('');
            setAnswer('');
            setImage(null);
            setImageCustomName('');
        } catch (error) {
            console.error('Error creating FAQ:', error.response ? error.response.data : error.message);
            setError('Failed to create FAQ.');
        }
    };

    return (
        <div className="faq-container">
      <div className='faq-form'>
            <h2>Create a New FAQ</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="question">Question:</label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="answer">Answer:</label>
                    <textarea
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleFileChange}
                    />
                </div>
                <div>
                    <label htmlFor="imageCustomName">Image Custom Name:</label>
                    <input
                        type="text"
                        id="imageCustomName"
                        value={imageCustomName}
                        onChange={(e) => setImageCustomName(e.target.value)}
                    />
                </div>
                <button  className='faq-form-btn' type="submit">Create FAQ</button>
            </form>
            {success && <p className="success-message">{success}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
        </div>
    );
};

export default FAQForm;
