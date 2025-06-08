// NavBar.jsx
import React from 'react';
import '../styles/global.css';
import './NavBar.css';

function NavBar() {
  return (
    <div className="header">
      <div className='nav-list'>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <div className="button-primary">
        <a href="media/Resume.pdf" target="_blank" download>Resume</a>
      </div>
    </div>
  );
}

export default NavBar;