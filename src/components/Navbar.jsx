import React from 'react';
import { Link } from 'react-router-dom'; // For client-side routing


const Navbar = () => {
  return (
    <nav>
      {/* Logo with Link to Home */}
      <div className="logo">
        <Link to="/" style={{ cursor: 'pointer' }}>
          <img
            src="https://res.cloudinary.com/dzimlk7wj/image/upload/v1734880218/Screenshot__2_-removebg-preview_cxllad.png"
            alt="College Logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul>
        <li>
          <Link to="/aptitude">Aptitude</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/drives">Drives</Link>
        </li>
        <li>
          <Link to="/interview">Interviews</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;