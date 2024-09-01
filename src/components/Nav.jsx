import React from 'react';
import { Link } from 'react-router-dom'; 
import './Nav.css';

function Navigation({ currentSection, onSectionChange }) {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className={`nav-item ${currentSection === 'Home' ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => onSectionChange('Home')}>
            Home
          </Link>
        </li>
        <li className={`nav-item ${currentSection === 'Portfolio' ? 'active' : ''}`}>
          <Link to="/portfolio" className="nav-link" onClick={() => onSectionChange('Portfolio')}>
            Portfolio
          </Link>
        </li>
        <li className={`nav-item ${currentSection === 'Contact' ? 'active' : ''}`}>
          <Link to="/contact" className="nav-link" onClick={() => onSectionChange('Contact')}>
            Contact
          </Link>
        </li>
        <li className={`nav-item ${currentSection === 'Resume' ? 'active' : ''}`}>
          <Link to="/resume" className="nav-link" onClick={() => onSectionChange('Resume')}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

