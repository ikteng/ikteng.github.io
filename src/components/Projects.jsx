import React from 'react';
import './Projects.css';
import UTKFaceImg from '../assets/media/project_media/UTKFace.jpg';
import MovieReviewImg from '../assets/media/project_media/movie_review.png';
import HomeworkTrackerImg from '../assets/media/project_media/homework_tracker.png';
import LakeMononaImg from '../assets/media/project_media/lake_monona.jpg';

function Projects() {
    const projects = [
        {
            title: 'Age and Gender Predictor',
            description: 'Deep learning model to predict age and gender from facial images (UTKFace dataset).',
            image: UTKFaceImg,
            link: 'https://github.com/ikteng/Age-and-Gender-Predictor',
        },
        {
            title: 'IMDb Movie Review Sentiment Analysis',
            description: 'Classifies reviews as positive or negative using multiple machine learning techniques.',
            image: MovieReviewImg,
            link: 'https://github.com/ikteng/Movie_Reviews',
        },
        {
            title: 'Homework Tracker',
            description: 'Flask-based web app to manage assignments with user authentication and tracking.',
            image: HomeworkTrackerImg,
            link: 'https://github.com/ikteng/homework-trackers',
        },
        {
            title: 'Ice Days of Lake Monona',
            description: 'Analyzes and forecasts lake freeze duration using linear regression on historical data.',
            image: LakeMononaImg,
            link: 'https://github.com/ikteng/Ice-days-of-Lake-Monona',
        },
    ];

  return (
    <section className="projects-section">
      <h1>Featured Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card" onClick={() => window.open(proj.link, '_blank')}>
            <div className="project-thumb" style={{ backgroundImage: `url('${proj.image}')` }} />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <button className="project-btn" onClick={() => window.open('https://github.com/ikteng?tab=repositories', '_blank')}>
          View More Projects →
        </button>
      </div>
    </section>
  );
}

export default Projects;
