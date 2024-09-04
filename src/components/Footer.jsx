import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons from React Icons
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <a href="https://github.com/AnamarisOrtiz" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{ marginRight: '10px' }} /> 
        </a>

       
        <a href="https://www.linkedin.com/in/anamaris-ortiz-85203a300/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ marginRight: '10px' }} /> 
        </a>

       
        <a href="https://x.com/AnamarisOrtiz" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} style={{ marginRight: '10px' }} /> 
        </a>
      </div>
    </footer>
  );
}

export default Footer;


