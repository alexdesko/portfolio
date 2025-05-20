import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <nav>
          <Link to="/">about</Link>
          <Link to="/jobs">experiences</Link>
          <Link to="/projects">projects</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
