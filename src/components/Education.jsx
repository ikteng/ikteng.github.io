// Education.jsx
import React from 'react';
import '../styles/global.css';
import '../styles/Education.css';
import uwMadisonLogo from '../assets/media/uw-madison logo.png';
import sunwayLogo from '../assets/media/sunway_logo.png';

function Education() {
  return (
    <div className="section">
      <h1>Education</h1>
      <div className="timeline">
        <div className="timeline-line" />

        {/* UW-Madison */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="card education-card">
            <img src={uwMadisonLogo} alt="UW-Madison Logo" className="education-logo" />
            <div className="education-info">
              <h2>University of Wisconsin – Madison (USA)</h2>
              <h3>Sep 2023 – May 2025</h3>
              <p><strong>Qualification:</strong> Bachelor’s of Science: Computer Science</p>
              <p><strong>CGPA:</strong> 3.57 / 4.00</p>
            </div>
          </div>
        </div>

        {/* Sunway */}
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="card education-card">
            <img src={sunwayLogo} alt="Sunway University Logo" className="education-logo" />
            <div className="education-info">
              <h2>Sunway University (Malaysia)</h2>
              <h3>Jan 2022 – Aug 2023</h3>
              <p><strong>Qualification:</strong> ADTP in Computer Science, BS</p>
              <p><strong>CGPA:</strong> 3.48 / 4.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;