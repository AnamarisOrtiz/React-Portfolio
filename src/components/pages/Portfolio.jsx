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
      gap: '100px',
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
      imageUrl: 'src/images/bravissimo.png',
      repoUrl: 'https://github.com/amritank/bravissimo',
    },
    {
      title: 'Kanban Board',
      imageUrl: 'src/images/api-task-board.gif',
      projectUrl: 'https://anamarisortiz.github.io/API-Task-Board/',
      repoUrl: 'https://github.com/AnamarisOrtiz/API-Task-Board',
    },
    {
      title: 'Blog Board',
      imageUrl: 'src/images/bloggg.gif',
      projectUrl: 'https://anamarisortiz.github.io/DOM-Personal-Blog/',
      repoUrl: 'https://github.com/AnamarisOrtiz/DOM-Personal-Blog?tab=readme-ov-file',
    },
    {
      title: 'Weather Dashboard',
      imageUrl: 'src/images/weather-dash2.gif',
      projectUrl: 'https://anamarisortiz.github.io/Weather-Dashboard/',
      repoUrl: 'https://github.com/AnamarisOrtiz/Weather-Dashboard',
    },
    {
      title: 'Jate Editor',
      imageUrl: 'src/images/JATE-psa.gif',
      projectUrl: 'https://jate-text-editor-rmqh.onrender.com',
      repoUrl: 'https://github.com/AnamarisOrtiz/JATE-Text-Editor?tab=readme-ov-file',
    },
    {
      title: 'ORM E Commerce',
      imageUrl: 'src/images/orm-ecommerce-gi.gif',
      repoUrl: 'https://github.com/AnamarisOrtiz/ORM-E-Commerce/tree/main',
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

