import React from 'react';
import profilePicture from '../assets/almost-me.jpg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="profile-image-container">
          <img 
            src={profilePicture} 
            alt="Alexandre de Skowronski" 
            className="profile-image"
          />
        </div>
        <div className="about-content">
          <h1>Alexandre de Skowronski</h1>
          <p className="tagline">Data Science, Machine Learning, Physics</p>
          <p className="bio">
            Hi, I'm Alex.<br />
            I'm a data scientist and machine learning enthusiast with a physics degree from EPFL. 
            After exploring opportunities, I'm back on the job market to build modern and impactful systems.
            I'm currently working on personal projects, check out my <a href="/projects">projects</a> page!


          </p>
          <div className="contact-links">
            <a href="https://github.com/alexdesko" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={githubIcon} alt="GitHub" className="social-icon" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/alexdesko" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 