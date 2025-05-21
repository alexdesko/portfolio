import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import emailIcon from './assets/icons/email.svg';
import './App.css';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-social">
            <a href="https://github.com/alexdesko" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={githubIcon} alt="GitHub" className="footer-social-icon" />
            </a>
            <a href="https://linkedin.com/in/alexdesko" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
            </a>
            <Link to="/contact" className="social-link">
              <img src={emailIcon} alt="Contact" className="footer-social-icon" />
            </Link>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Alexandre de Skowronski. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
