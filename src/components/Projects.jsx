import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project Name</h3>
          <p className="project-description">
            Brief description of the project and its key features.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 