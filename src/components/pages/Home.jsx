import React from 'react';

function Home() {
  const styles = {
    home: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    developerPhoto: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      marginBottom: '20px',
    },
    aboutText: {
      maxWidth: '600px',
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#333',
    },
  };

  return (
    <section style={styles.home}>
      <img src="/path/to/photo.jpg" alt="Developer" style={styles.developerPhoto} />
      <h2>About Me</h2>
      <p style={styles.aboutText}>
      Hello! I'm Anamaris Ortiz, a passionate web developer with a knack for creating dynamic, responsive, and user-friendly websites and applications. I recently graduated from the UC Berkeley Full Stack Web Development Bootcamp, where I honed my skills in HTML, CSS, JavaScript, React, Node.js, and more. I am driven by a love for learning and a desire to solve complex problems through innovative coding solutions.

Throughout my bootcamp experience, I worked on various projects that challenged me to think critically and creatively. I thrive in collaborative environments and enjoy working with teams to build engaging digital experiences. I am excited to bring my skills and enthusiasm to new opportunities in the tech world and continue growing as a developer.

When I'm not coding, you can find me exploring new technologies, experimenting with design, or diving into a good book. I'm always eager to connect and learn from others in the tech community, so feel free to reach out!
      </p>
    </section>
  );
}

export default Home;
