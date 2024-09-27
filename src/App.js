import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import './App.css';
import About from './components/Pages/About';
import Casestudy from './components/Pages/Casestudy';
import Contact from './components/Pages/Contact';
import IOSdevelopmentpage from './components/Pages/IOSdevelopmentpage';
import Androiddevelopmentpage from './components/Pages/Androiddevelopmentpage';
import Flutterdevelopmentpage from './components/Pages/Flutterdevelopmentpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/about" element={<About />} /> {/* Home route */}
        <Route path="/casestudy" element={<Casestudy />} /> {/* Home route */}
        <Route path="/iosdevelopmentpage" element={<IOSdevelopmentpage />} /> {/* Home route */}
        <Route path="/androiddevelopmentpage" element={<Androiddevelopmentpage />} /> {/* Home route */}
        <Route path="/flutterdevelopmentpage" element={<Flutterdevelopmentpage />} /> {/* Home route */}
        <Route path="/contact" element={<Contact />} /> {/* Home route */}
        {/* Yahan aap future pages bhi add kar sakte hain */}
      </Routes>
    </Router>
  );
}

export default App;
