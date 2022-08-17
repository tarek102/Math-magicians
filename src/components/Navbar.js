import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navigation">
    <nav>
      <h2>Math Magicians</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="separator">|</li>
        <li><Link to="./calculator">Calculator</Link></li>
        <li className="separator">|</li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </div>

);

export default Navbar;
