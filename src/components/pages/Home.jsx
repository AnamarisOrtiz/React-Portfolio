import React from 'react';


function Home() {
  const styles = {
    home: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f0e9e3',
    },
    developerPhoto: {
      width: '250px',
      height: '250px',
      borderRadius: '50%',
      marginBottom: '20px',
    },
    aboutText: {
      maxWidth: '800px',
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#333',
      lineHeight: '1.6',
    },
  };
  
  return (
    <section style={styles.home}>
      <img src="Screenshot 2024-09-03 at 7.03.31 PM.png" alt="Developer" style={styles.developerPhoto} />
      <h2>About Me</h2>
      <p style={styles.aboutText}>
      Hi there! I'm Anamaris Ortiz, a web developer with a passion for building sleek, responsive websites and applications. I recently graduated from the UC Berkeley Full Stack Web Development Bootcamp, where I got hands-on with HTML, CSS, JavaScript, React, Node.js, and more. I love diving into new challenges and finding creative solutions to coding problems.

I enjoy working with teams to create digital experiences that are both engaging and user-friendly. When I’m not coding, I’m probably exploring new tech trends, tinkering with design ideas, or enjoying a good book. I'm always up for connecting with fellow tech enthusiasts, so feel free to reach out!
      </p>
    </section>
  );
}

export default Home;
