import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="icon-navbar">
      <a href="mailto:elise.poniman@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
      <a href="https://github.com/elise-p" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/elise-poniman/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </nav>
  );
}

export default Navbar;