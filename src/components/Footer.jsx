// Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <h1>Contacts</h1>
      <div className="contact-me">
        <a className="contact-link" href="https://www.linkedin.com/in/ik-teng-liaw-b261a02a8" target="_blank" rel="noreferrer">
          <span className="iconify" data-icon="mdi:linkedin" data-width="32" data-height="32"></span>
        </a>
        <a className="contact-link" href="https://github.com/ikteng" target="_blank" rel="noreferrer">
          <span className="iconify" data-icon="mdi:github" data-width="32" data-height="32"></span>
        </a>
        <a className="contact-link" href="mailto:iktengliaw@gmail.com">
          <span className="iconify" data-icon="mdi:email-outline" data-width="32" data-height="32"></span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
