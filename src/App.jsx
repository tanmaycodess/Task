import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import Service from './Pages/Service.jsx'
import Contact from './Pages/contact.jsx'
import Success from './Pages/Success.jsx';
import Train from './Pages/Train.jsx';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Train" element={<Train />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
