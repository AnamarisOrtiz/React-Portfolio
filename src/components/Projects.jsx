import React from 'react';
import './Projects.css'; 

function Project({ title, imageUrl, projectUrl, repoUrl }) {
  return (
    <div className="project-card">
      {/* Project Image */}
      <div className="project-image">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={`Screenshot of ${title}`} className="image" />
        </a>
      </div>

      {/* Project Title */}
      <h3 className="project-title">{title}</h3>

      {/* Project Links */}
      <div className="project-links">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          View Live
        </a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          View Code
        </a>
      </div>
    </div>
  );
}

export default Project;

