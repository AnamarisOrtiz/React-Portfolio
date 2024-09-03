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
      title: 'BraviSSimo',
      imageUrl: 'Screenshot 2024-09-02 at 8.22.43 PM.png',
      projectUrl: 'https://example.com/project-one',
      repoUrl: 'https://github.com/amritank/bravissimo',
    },
    {
      title: 'PWA',
      imageUrl: 'JATE-psa.gif',
      projectUrl: 'https://jate-text-editor-rmqh.onrender.com',
      repoUrl: 'https://github.com/AnamarisOrtiz/JATE-Text-Editor',
    },
    {
      title: 'Kanban Board',
      imageUrl: 'api-task-board.gif',
      projectUrl: 'https://anamarisortiz.github.io/API-Task-Board/',
      repoUrl: 'https://github.com/AnamarisOrtiz/API-Task-Board',
    },
    {
      title: 'Blog Board',
      imageUrl: 'bloggg.gif',
      projectUrl: 'https://anamarisortiz.github.io/DOM-Personal-Blog/',
      repoUrl: 'https://github.com/AnamarisOrtiz/DOM-Personal-Blog?tab=readme-ov-file',
    },
    {
      title: 'Weather Dashboard',
      imageUrl: 'weather-dash2.gif',
      projectUrl: 'https://anamarisortiz.github.io/Weather-Dashboard/',
      repoUrl: 'https://github.com/AnamarisOrtiz/Weather-Dashboard',
    },
   
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

