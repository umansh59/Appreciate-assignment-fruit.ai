import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css'

const TranslateLoading = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/translate', { replace: true });
      }, 2000); 
  
      return () => clearTimeout(timer); 
    }, [navigate]);
  
    return (
        <div className="loading-container">
        <div className='loading-form'>
        <img id='loading-img' src={require('./public/languages_3898840.png')} alt="chat" />
        <h1 id='loading-h'> Fruit.Ai <span id='high'>Translate!</span></h1>
        <p id ='loading-p'>The only Translating app u need !! </p>
        <span className="loader"></span>
         </div>
      </div>
    );
};

export default TranslateLoading;
