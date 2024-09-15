import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css'


const FAQLoading = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/faq', { replace: true });
      }, 2000); 
  
      return () => clearTimeout(timer); 
    }, [navigate]);
  
    return (
        <div className="loading-container">
        <div className='loading-form'>
        <img id='loading-img' src={require('./public/faq_13330832.png')} alt="chat" />
        <h1 id='loading-h'> Fruit.Ai <span id='high'>FAQ!</span></h1>
        <p id ='loading-p'>The FAQs !! </p>
        <span className="loader"></span>
         </div>
      </div>
    );
};

export default FAQLoading;
