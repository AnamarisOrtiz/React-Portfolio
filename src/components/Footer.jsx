import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/your-stackoverflow-profile" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
        {/* Optional: Add additional links or information */}
      </div>
    </footer>
  );
}

export default Footer;


