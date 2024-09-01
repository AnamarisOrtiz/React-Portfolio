import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';


function App() {
  
  const [currentSection, setCurrentSection] = useState('Home');
  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <Router>
      <div className="app">
        {/* Header with Navigation */}
        <Header currentSection={currentSection} onSectionChange={handleSectionChange} />

        {/* Main Content Area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
