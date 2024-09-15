import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Chat from './components/Chat';
import FAQ from './components/Faq';
import Translate from './components/Translate';
import ChatLoading from './components/ChatLoading';
import FAQLoading from './components/FaqLoading';
import TranslateLoading from './components/TranslateLoading';
import About from './components/About';
import CreateFAQ from './components/CreateFAQ';
import FAQUpdate from './components/FAQUpdate';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/chatloading" element={<ChatLoading/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/faqloading" element={<FAQLoading/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/createfaq" element={<CreateFAQ/>}/>
        <Route path="/faq/edit/:id" element={<FAQUpdate />} />
        <Route path="/translateloading" element={<TranslateLoading/>}/>
        <Route path="/translate" element={<Translate/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </Router>
  );
};

export default App;
