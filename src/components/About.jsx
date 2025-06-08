// About.jsx
import React from 'react';
import '../styles/global.css';
import './About.css'

function About() {
  return (
    <div>
      <section className="section">
        <div className="about-content-container">
          <h1>About Me</h1>
          <h2>Hey there! 👋</h2>
          <p>
            I’m a recent graduate from the University of Wisconsin–Madison with a deep passion for using technology to solve real-world problems. From tackling complex data challenges to building intuitive applications, I enjoy bringing ideas to life through code.
          </p>

          <p>
            My background spans machine learning, data analysis, and full-stack development. I thrive in projects where I can dive into data, uncover insights, and build solutions that make a real impact. I’m especially drawn to collaborative environments where curiosity and creativity are encouraged.
          </p>

          <p>
            I'm currently open to new opportunities — whether it's in software engineering, data science, or something unexpected! I'm always eager to learn, grow, and contribute to meaningful work.
          </p>

          <p>
            Let’s connect and explore how we can work together! Feel free to reach out at <a href="mailto:iktengliaw@gmail.com">iktengliaw@gmail.com</a>.
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;