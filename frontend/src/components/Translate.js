import React, { useState } from 'react';
import axios from 'axios';
import './Translate.css';
const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en'); 
  const [targetLang, setTargetLang] = useState('es'); 

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'nl', name: 'Dutch' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'bn', name: 'Bengali' },
    { code: 'tr', name: 'Turkish' },
    { code: 'el', name: 'Greek' },
    { code: 'pl', name: 'Polish' },
    { code: 'he', name: 'Hebrew' },
    { code: 'sv', name: 'Swedish' },
    { code: 'da', name: 'Danish' },
    { code: 'fi', name: 'Finnish' },
    { code: 'no', name: 'Norwegian' },
    { code: 'ro', name: 'Romanian' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'cs', name: 'Czech' },
    { code: 'sk', name: 'Slovak' },
    { code: 'th', name: 'Thai' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'vi', name: 'Vietnamese' },
  ];
  const apiUrl = process.env.REACT_APP_MYMEMORY_API_URL; 
  
  const translateText = async () => {
    try {
      console.log(apiUrl);
      const response = await axios.get(apiUrl, {
        params: {
          q: inputText,
          langpair: `${sourceLang}|${targetLang}`,
        },
      });
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div className='app-container'>
      <div className='app-form'>
      <h1 className='trans-head'>Translator</h1>
      <h3 className='head3'>Original Text:</h3>

      <textarea
        className='trans-box'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
        rows="5"
        cols="50"
      />
      <div>
        <label>Source Language:</label>
        <select value={sourceLang} className='sel' onChange={(e) => setSourceLang(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Target Language:</label>
        <select value={targetLang} className='sel' onChange={(e) => setTargetLang(e.target.value)}>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <button className='trans-button' onClick={translateText}>Translate</button>
      <div>
        <h3 className='head3'>Translated Text:</h3>
        <textarea
          className='trans-box'
          value={translatedText}
          readOnly
          rows="5"
          cols="50"
          placeholder="Translation will appear here"
        />
      </div>
    </div>
    </div>
  );
};
export default Translate;
