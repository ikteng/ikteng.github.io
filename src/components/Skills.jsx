import React from 'react';
import '../styles/global.css';
import './Skills.css';

function Skills() {
  return (
    <section className="section">
      <h1>Skills</h1>
      <div className="grid skills-grid">
        
        <div className="card skills-card">
          <h2>Programming Languages</h2>
          <div className="skill-icon-grid">
            <span className="iconify" data-icon="logos:python"></span>
            <span className="iconify" data-icon="logos:java"></span>
            <span className="iconify" data-icon="skill-icons:javascript"></span>
            <span className="iconify" data-icon="skill-icons:html"></span>
            <span className="iconify" data-icon="skill-icons:css"></span>
          </div>
        </div>

        <div className="card skills-card">
          <h2>Tools & Frameworks</h2>
          <div className="skill-icon-grid">
            <span className="iconify" data-icon="devicon:git"></span>
            <span className="iconify" data-icon="devicon:flask"></span>
            <span className="iconify" data-icon="devicon:tensorflow"></span>
            <span className="iconify" data-icon="devicon:pytorch"></span>
            <span className="iconify" data-icon="devicon:keras"></span>
            <span className="iconify" data-icon="devicon:scikitlearn"></span>
            <span className="iconify" data-icon="devicon:opencv"></span>
            <span className="iconify" data-icon="devicon:matplotlib"></span>
            <span className="iconify" data-icon="devicon:seaborn"></span>
          </div>
        </div>

        <div className="card skills-card">
          <h2>Databases</h2>
          <div className="skill-icon-grid">
            <span className="iconify" data-icon="devicon:mysql"></span>
            <span className="iconify" data-icon="devicon:sqlite"></span>
          </div>
        </div>

        <div className="card skills-card">
          <h2>Design Tools</h2>
          <div className="skill-icon-grid">
            <span className="iconify" data-icon="devicon:figma"></span>
            <span className="iconify" data-icon="devicon:canva"></span>
          </div>
        </div>

        <div className="card skills-card">
          <h2>Languages</h2>
          <table className="language-table">
            <tbody>
              <tr>
                <td>English</td>
                <td>
                  <div className="language-bar">
                    {[...Array(4)].map((_, i) => <div key={i} className="proficiency square" />)}
                    <div className="proficiency square empty" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Chinese</td>
                <td>
                  <div className="language-bar">
                    {[...Array(3)].map((_, i) => <div key={i} className="proficiency square" />)}
                    {[...Array(2)].map((_, i) => <div key={i + 3} className="proficiency square empty" />)}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Malay</td>
                <td>
                  <div className="language-bar">
                    <div className="proficiency square" />
                    {[...Array(4)].map((_, i) => <div key={i + 1} className="proficiency square empty" />)}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default Skills;
