import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import './App.css';
import About from './components/Pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* Home route */}
        {/* Yahan aap future pages bhi add kar sakte hain */}
      </Routes>
    </Router>
  );
}

export default App;
