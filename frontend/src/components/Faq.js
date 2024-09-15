import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Faq.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const faq_get_api = process.env.REACT_APP_FAQ_GET_API;

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(faq_get_api);
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [faq_get_api]);
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/createfaq');
};

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-form">
          <img id="loading-img" src={require('./public/faq_13330832.png')} alt="chat" />
          <h1 id="loading-h">Fruit.Ai <span id="high">FAQ!</span></h1>
          <p id="loading-p">The FAQs !!</p>
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="faq-container">
      <div className="faq-form">
        <h2 className="faq-head">FAQ Section</h2>
        <button className='add-new' onClick={handleClick}>ADD NEW FAQ</button>
        {faqs.length > 0 ? (
          <ul>
            {faqs.map((faq, index) => (
              <li key={index}>
                {faq.image && (
                  <div>
                    <img
                      src={faq.image}
                      alt={faq.image_custom_name || 'FAQ Image'}
                      style={{ width: '100px', height: '100px' }}
                      className="faq-pic"
                    />
                    {faq.image_custom_name && <p className="img-name">{faq.image_custom_name}</p>}
                  </div>
                )}
                <div>
                  <h3 className="ques">{faq.question}</h3>
                  <p className="ans">{faq.answer}</p>
                </div>
                <p className="created">{new Date(faq.created_at).toLocaleDateString()}</p>
                <Link to={`/faq/edit/${faq.id}`}>
                  <button className='edit-btn'>EDIT</button>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No FAQs available at the moment.</p>
        )}
        
        </div>
    </div>
  );
};

export default FAQ;
