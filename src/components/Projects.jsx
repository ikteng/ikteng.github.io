import React from 'react';
import '../styles/global.css';
import './Projects.css';
import ChurnImg from '../assets/media/project_media/churn.jpg';
import RSNAImg from '../assets/media/project_media/rsna.jpg';
import UTKFaceImg from '../assets/media/project_media/UTKFace.jpg';
import MovieReviewImg from '../assets/media/project_media/movie_review.png';
import HomeworkTrackerImg from '../assets/media/project_media/homework_tracker.png';
import LakeMononaImg from '../assets/media/project_media/lake_monona.jpg';

function Projects() {
  const projects = [
    {
      title: 'Customer Churn Prediction Platform, UW-Madison Capstone Project - NUUMobile',
      description: 'A web-based Customer Churn Prediction Platform that enables users to upload and analyze Excel files with missing data, view predictions using ML models, and explore insights through a dynamic dashboard using React, Python and Flask',
      image: ChurnImg,
      link: 'https://github.com/ACarrig/NUUMobile1',
    },
    {
      title: 'RSNA Pneumonia Detection',
      description: 'A deep learning project that detects pneumonia from chest X-ray images using a DenseNet-based model, featuring end-to-end data preprocessing, training, evaluation, and prediction pipelines built with TensorFlow and supporting tools.',
      image: RSNAImg,
      link: 'https://github.com/ikteng/RSNA-Pneumonia-Detection-Project',
    },
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
    <section className="section">
      <h1>Featured Projects</h1>
      <div className="grid projects-grid">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="project-card"
            onClick={() => window.open(proj.link, '_blank')}
          >
            <div
              className="project-thumb"
              style={{ backgroundImage: `url('${proj.image}')` }}
            />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <button
          className="button-primary"
          onClick={() => window.open('https://github.com/ikteng?tab=repositories', '_blank')}
        >
          View More Projects →
        </button>
      </div>
    </section>
  );
}

export default Projects;
