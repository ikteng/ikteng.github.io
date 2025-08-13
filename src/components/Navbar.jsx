// NavBar.jsx
import React from 'react';
import '../global.css';
import '../styles/NavBar.css';
import periIcon from '../assets/media/periwinkle.png'

function NavBar() {
  return (
    <div className="header">
      <div className="logo">
        <img src={periIcon} alt="Periwinkle Logo" />
        <span className="logo-text">Ik Teng</span>
      </div>

      <div className='nav-list'>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <div className="button-primary resume-button">
        <a href="media/Resume.pdf" target="_blank" download>Resume</a>
      </div>
    </div>
  );
}

export default NavBar;