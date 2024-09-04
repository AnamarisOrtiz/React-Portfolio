import React from "react";
import Nav from './Nav';
import './Header.css';


function Header ({ currentSection, onSectionChange}) {
   return (
      <header className="header">
         <h1 className="name"> Anamaris Ortiz</h1>
         <Nav currentSection={currentSection} onSectionChange={onSectionChange} />
         
      </header>
   )
}
export default Header;

