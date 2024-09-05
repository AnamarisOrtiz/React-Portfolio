import React from 'react';

function Resume() {
  const styles = {
    resume: {
      padding: '20px',
      textAlign: 'center',
    },
    downloadLink: {
      display: 'inline-block',
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#007bff',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '4px',
    },
    proficiencyList: {
      listStyleType: 'none',
      padding: '0',
      marginTop: '20px',
    },
    proficiencyItem: {
      fontSize: '1.1rem',
      margin: '5px 0',
    },
  };

  return (
    <section style={styles.resume}>
      <h2>Resume</h2>
      <a href="resumeimg.png" download style={styles.downloadLink}>
        Download Resume
      </a>
      <h3>Proficiencies</h3>
      
     
      <div style={styles.proficiencyCategory}>Front-End Technologies:</div>
      <ul style={styles.proficiencyList}>
        <li style={styles.proficiencyItem}>HTML/CSS</li>
        <li style={styles.proficiencyItem}>JavaScript</li>
        <li style={styles.proficiencyItem}>React </li>
        <li style={styles.proficiencyItem}>Responsive Design</li>
      </ul>
      
      
      <div style={styles.proficiencyCategory}>Back-End Technologies:</div>
      <ul style={styles.proficiencyList}>
        <li style={styles.proficiencyItem}>Node.js</li>
        <li style={styles.proficiencyItem}>Express.js</li>
        <li style={styles.proficiencyItem}>MongoDB (Mongoose)</li>
        <li style={styles.proficiencyItem}>SQL (Basic Knowledge)</li>
        <li style={styles.proficiencyItem}>RESTful API Development</li>
      </ul>
      
     
      <div style={styles.proficiencyCategory}>Additional Skills:</div>
      <ul style={styles.proficiencyList}>
        <li style={styles.proficiencyItem}>Git & GitHub (Version Control)</li>
        <li style={styles.proficiencyItem}>Deployment (Render, Netlify)</li>
       
      </ul>
    </section>
  );
}

export default Resume;
