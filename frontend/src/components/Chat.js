import React, { useState } from 'react';
import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPaperclip, faPaperPlane, faPlay, faPlus, faMinus, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'; // Import moon and sun icons

const fruitData = [
  {
    name: 'Apple',
    price: 2.5,
    img: require('./public/images (1).jpeg')
  },
  {
    name: 'Banana',
    price: 1.2,
    img: require('./public/Banana.jpg')
  },
  {
    name: 'Orange',
    price: 1.8,
    img: require('./public/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg')
  },
];

const Chat = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [quantities, setQuantities] = useState([0, 0, 0]);

  const handleGoBack = () => {
    window.history.back();
  };

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setQuantities(newQuantities);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='chat-form'>
        <div className='chat-header'>
          <button className='back-btn' onClick={handleGoBack} type='button'>
            <FontAwesomeIcon id='send-btn-icon' icon={faArrowLeft} className='input-icon' />
          </button>
          <img id='avatar-img' src={require('./public/1000_F_244435000_orBnSERPq9fO8MjkGnEH55FeKQKRPdm4.jpg')} alt='chat' />
          <h2 className='chat-name'>John Doe</h2>
          <p className='online-status'>online</p>
          <button className='toggle-dark-mode' onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>

        <div className='chat-body'>
          <div className='message received'>
            <div className='bubble'>
              <p>Hey, how are you?</p>
              <span className='timestamp'>10:30 AM</span>
            </div>
          </div>

          <div className='message sent'>
            <div className='bubble'>
              <p>I'm good! How about you?</p>
              <span className='timestamp'>10:32 AM</span>
            </div>
          </div>

          <div className='message received'>
            <div className='bubble'>
              <p>I'm doing great, thanks!</p>
              <span className='timestamp'>10:33 AM</span>
            </div>
          </div>

          <div className='message sent recorded'>
            <div className='bubble recorded-bubble'>
              <FontAwesomeIcon icon={faPlay} className='play-icon' />
              <div className='recording-duration'>0:30</div>
              <span className='timestamp'>10:35 AM</span>
              <img src={require('./public/sound.png')} alt="chat" id='sound' />
            </div>
          </div>
          {fruitData.map((fruit, index) => (
            <div className='message received card-bubble' key={index}>
              <div className='bubble'>
                <img src={fruit.img} alt={fruit.name} className='fruit-img' />
              </div>
              <div className='fruit-details'>
                <h3>{fruit.name}</h3>
                <p>Price: ${fruit.price.toFixed(2)}</p>
                <div className='quantity-controls'>
                  <button onClick={() => decreaseQuantity(index)} className='quantity-btn'>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className='quantity'>{quantities[index]}</span>
                  <button onClick={() => increaseQuantity(index)} className='quantity-btn'>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='send'>
          <FontAwesomeIcon id='pp-clip' icon={faPaperclip} className='input-icon' />
          <input className='type-msg' type='text' placeholder='Type the message....' />
          <button className='send-btn'>
            <FontAwesomeIcon id='send-btn-icon' icon={faPaperPlane} className='input-icon' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
