import React from 'react';
import './styles.css'; // Make sure to include your CSS

export default function Portfolio() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#welcome">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <div className="resume-btn">
          <a href="media/Resume.pdf" target="_blank" rel="noopener noreferrer" download>
            Resume
          </a>
        </div>
      </header>

      <section id="welcome" className="welcome-section">
        <h1 className="name">Ik Teng Liaw</h1>
      </section>

      <section id="about" className="content-section">
        <div className="content">
          <h2>About Me</h2>
          <h3>Hey there! 👋</h3>
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
            <br />
            Feel free to reach out at <a href="mailto:iktengliaw@gmail.com">iktengliaw@gmail.com</a>.
          </p>
        </div>
      </section>

      <section id="education" className="content-section">
        <div className="content">
          <h2>Education</h2>

          <div className="education-entry">
            <div className="entry-header">
              <img src="media/uw-madison logo.png" alt="UW-Madison Logo" className="university-logo" />
              <div className="entry-details">
                <h3>University of Wisconsin – Madison (USA)</h3>
                <h4>Sep 2023 – May 2025 (expected)</h4>
                <p>Bachelor’s Degree of Science in Computer Science</p>
                <p><strong>CGPA:</strong> 3.46/4.00</p>
              </div>
            </div>
          </div>

          <div className="education-entry">
            <div className="entry-header">
              <img src="media/sunway_logo.png" alt="Sunway University Logo" className="university-logo" />
              <div className="entry-details">
                <h3>Sunway University (Malaysia)</h3>
                <h4>Jan 2022 - Aug 2023</h4>
                <p>American Degree Transfer Program (ADTP) in Computer Science, BS</p>
                <p><strong>CGPA:</strong> 3.48/4.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="content-section">
        <div className="content">
          <h2>Relevant Courses</h2>
          <div className="courses-tiles">
            <div className="course-tile">
              <h3>💻 Computer Science</h3>
              <ul>
                {[
                  "Programming I-III", "Introduction to AI", "Introduction to Computer Engineering",
                  "Machine Organization and Programming", "Introduction to Human-Computer Interaction",
                  "Introduction to Algorithms", "Introduction to Operating Systems", "Software Engineering",
                  "Introduction to Big Data Systems", "Matlab Programming", "Autonomous Robotics", "CS Capstone"
                ].map(course => <li key={course}>{course}</li>)}
              </ul>
            </div>
            <div className="course-tile">
              <h3>🧮 Mathematics</h3>
              <ul>
                {[
                  "Discrete Mathematics", "Calculus & Analytic Geometry I & II", 
                  "Introduction to Probability & Statistics", "Elementary Matrix & Linear Algebra",
                  "Introduction to Probability & Mathematical Statistics I"
                ].map(course => <li key={course}>{course}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="content">
          <h2>Featured Projects</h2>
          <div className="project-tiles">
            {[
              {
                title: "Age and Gender Predictor",
                image: "media/project_media/UTKFace.jpg",
                link: "https://github.com/ikteng/Age-and-Gender-Predictor",
                description: "Employ deep learning to predict age and gender from facial images..."
              },
              {
                title: "IMDb Movie Review Sentiment Analysis",
                image: "media/project_media/movie_review.png",
                link: "https://github.com/ikteng/Movie_Reviews",
                description: "Classify reviews as positive or negative using various ML techniques..."
              },
              {
                title: "Homework Tracker",
                image: "media/project_media/homework_tracker.png",
                link: "https://github.com/ikteng/homework-trackers",
                description: "Flask-based web application for managing assignments..."
              },
              {
                title: "Ice days of Lake Monona",
                image: "media/project_media/lake_monona.jpg",
                link: "https://github.com/ikteng/Ice-days-of-Lake-Monona",
                description: "Perform linear regression analysis on past data to predict frozen days..."
              }
            ].map(project => (
              <div className="project-tile" key={project.title} onClick={() => window.open(project.link, '_blank')}>
                <div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="project-btn" onClick={() => window.open("https://github.com/ikteng?tab=repositories", "_blank")}>
            View More Projects →
          </button>
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="content">
          <h2>Skills</h2>
          <div className="skills-tiles">
            <div className="skills-tile">
              <h3>Programming Languages</h3>
              <ul>
                <span className="iconify" data-icon="logos:python"></span>
                <span className="iconify" data-icon="logos:java"></span>
                <span className="iconify" data-icon="skill-icons:javascript"></span>
                <span className="iconify" data-icon="skill-icons:html"></span>
                <span className="iconify" data-icon="skill-icons:css"></span>
              </ul>
            </div>

            {/* Repeat similar tiles for Tools, Databases, Design, Languages... */}
          </div>
        </div>
      </section>

      <footer>
        <h2>Contact me</h2>
        <div className="contact-me">
          <a className="contact-link" href="https://linkedin.com/in/ik-teng-liaw-b261a02a8" target="_blank" rel="noopener noreferrer">
            <span className="iconify" data-icon="skill-icons:linkedin"></span>
          </a>
          <a className="contact-link" href="https://github.com/ikteng" target="_blank" rel="noopener noreferrer">
            <span className="iconify" data-icon="skill-icons:github-dark"></span>
          </a>
          <a className="contact-link" href="mailto:iktengliaw@gmail.com">
            <span className="iconify" data-icon="skill-icons:gmail-dark"></span>
          </a>
        </div>
        <p>© 2024 Ik Teng Liaw. All rights reserved.</p>
      </footer>
    </div>
  );
}
