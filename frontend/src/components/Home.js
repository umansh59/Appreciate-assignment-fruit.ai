import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  
import { useLocation } from 'react-router-dom'; 

const Home = () => {
  const location = useLocation();
  const { username } = location.state || {}; 
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div className="app-container">
      <div className="app-form">
        <h1 className='home-head'>Welcome, {username}!</h1>
        <h2>Fruit.Ai</h2>
        <h3>"Be Healthy"</h3>
        <div className='button-div'>
          <button 
            className='button-home' 
            id='b1' 
            onClick={() => handleButtonClick('chatloading')}
          >
            
            <img src={require('./public/pngwing.com.png')} alt="Chat" />
            <h2>Chat!</h2>
          </button>
          <button className='button-home' id='b2'></button>
        <button className='button-home' id='b3'> </button>
          <button 
            className='button-home' 
            id='b4' 
            onClick={() => handleButtonClick('translateloading')}
          >
            <img src={require('./public/languages_3898840.png')} alt="translate" />
            <h2>Translate!</h2>
          </button>
          <button 
            className='button-home' 
            id='b5' 
            onClick={() => handleButtonClick('faqloading')}
          >
            <img src={require('./public/faq_13330832.png')} alt="faqlaoding" />
            <h2>FAQ</h2>
          </button>
          <button className='button-home' id='b6'onClick={() => handleButtonClick('about')}>
            <img src={require('./public/pngwing.com (1).png')} alt="About Us" />
            <h2 >About Us</h2>
            <h3></h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
