// About.jsx
import React from 'react';
import './About.css'

function About() {
  return (
    <div>
      <div className="about-content-container">
        <h1>About Me</h1>
        <h2>Hey there! 👋</h2>
        <p>
          I’m a Computer Science senior at the University of Wisconsin-Madison, passionate about solving real-world problems with technology.
        </p>

        <p>
          I specialize in machine learning, data analysis, and software development, constantly seeking opportunities to innovate and make a tangible impact. 
        </p>

        <p>
          Whether it’s building cutting-edge models or developing intuitive applications, I’m driven by a curiosity to create meaningful solutions. 
        </p>
        
        <p>
          Let’s connect and make something amazing! 
          Feel free to reach out at <a href="mailto:iktengliaw@gmail.com">iktengliaw@gmail.com</a>. 
        </p>
      </div>
    </div>
  );
}

export default About;