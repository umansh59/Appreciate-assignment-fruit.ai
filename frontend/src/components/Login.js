import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser, faLock, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import './Login.css';  
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      alert(`Registered with username: ${username}`);
    } else {
      alert(`Logged in as ${username}`);
    }
    
    // Redirect to home page and pass username as state
    navigate('/home', { state: { username } });
  };

  const toggleToLogin = () => {
    setIsRegistering(false);
    setUsername('');
    setPassword('');
  };

  const toggleToRegister = () => {
    setIsRegistering(true);
    setUsername('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        <p className='terms'>
          By {isRegistering ? 'signing up' : 'signing in'} you are agreeing to our 
          <span className="highlight"> Terms and Privacy Policy</span>
        </p>
        
        <div className="toggle-buttons">
          <button type='button'
            onClick={toggleToLogin}
            className={`toggle-button ${!isRegistering ? 'active' : ''}`}
          >
            Login
          </button>
          <button type='button'
            onClick={toggleToRegister}
            className={`toggle-button ${isRegistering ? 'active' : ''}`}
          >
            Register
          </button>
        </div>
        
        <div className="input-container">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            type="text"
            placeholder="Username type in any name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>

        <div className="input-container">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password type in anything"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input password-field"
          />
          <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        <div className='pwd-handle'>
          <div>
            <input type="checkbox" id="remember" name="remember" value="remember"/>
            <label className='rem-label'>Remember password</label>
          </div>
          <a href='#' className='forgot-pwd'>Forgot password?</a>
        </div>

        <button type="submit" className="login-button">
          {isRegistering ? 'Register' : 'Login'}
        </button>
        
        <p className='or'>or connect with</p>
        
        <div className='socials'>
          <a href="https://www.facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.pinterest.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a href="https://www.instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <a href="#" className="social-icon" id='finger' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFingerprint} />
          </a>
      </form>
    </div>
  );
};

export default Login;
