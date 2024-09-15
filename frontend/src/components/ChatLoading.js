import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css'


const ChatLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/chat', { replace: true });
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className='loading-form'>
      <img id='loading-img' src={require('./public/pngwing.com.png')} alt="chat" />
      <h1 id='loading-h'> Fruit.Ai <span id='high'>Chat!</span></h1>
      <p id ='loading-p'>The only chatting app u need !! </p>
      <span className="loader"></span>
       </div>
    </div>
  );
};

export default ChatLoading;
