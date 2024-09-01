import React from 'react';
import Project from '../Projects';

function Portfolio() {
  const styles = {
    portfolio: {
      padding: '20px',
      textAlign: 'center',
    },
    projectList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    heading: {
      fontSize: '2rem',
      color: '#333',
    },
  };

  const projects = [
    {
      title: 'Project One',
      imageUrl: '/path/to/project-one-image.jpg',
      projectUrl: 'https://example.com/project-one',
      repoUrl: 'https://github.com/your-repo/project-one',
    },
    {
      title: 'Project Two',
      imageUrl: '/path/to/project-two-image.jpg',
      projectUrl: 'https://example.com/project-two',
      repoUrl: 'https://github.com/your-repo/project-two',
    },
    // Add more projects as needed
  ];

  return (
    <section style={styles.portfolio}>
      <h2 style={styles.heading}>Portfolio</h2>
      <div style={styles.projectList}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

