import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
