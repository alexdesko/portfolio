import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card coming-soon">
          <h3>Coming Soon...</h3>
          <p className="project-description">
            I'm currently working on some exciting projects. In the meantime, you can check out my GitHub profile to see my contributions and repositories.
          </p>
          <div className="project-links">
            <a 
              href="https://github.com/alexdesko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              Visit my GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 