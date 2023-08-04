import React from 'react';
//import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Blue from './components/Blue';
import Red from './components/Red';
import Terms from './components/Terms';
import Copyright from './components/Copyright'; 
import './App.css';

function App() {
 // const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            {/* Route for the Home component */}
            <Route path="/" element={<Home />} />
            {/* Route for the Blue component */}
            <Route path="/blue" element={<Blue />} />
            {/* Route for the Red component */}
            <Route path="/red" element={<Red />} />
            {/* Route for the Terms component */}
            <Route path="/terms" element={<Terms />} />
            {/* Route for the Copyright component */}
            <Route path="/copyright" element={<Copyright />} />
          </Routes>
        </div>
      </div>
      <div id="footer" className="footer-container">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/copyright">Copyright</Link>
      </div>
    </>
  );
}

export default App;




