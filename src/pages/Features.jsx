import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-heading">Our Features</h1>
      
      <div className="cards-wrapper">
        {/* Card 1 - Aptitude Practice */}
        <div className="feature-card">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Aptitude Practice"
              className="card-image"
            />
          </div>
          <h3>Aptitude Practice</h3>
          <p>Enhance your problem-solving skills with our comprehensive aptitude practice tests.</p>
        </div>

        {/* Card 2 - Mock Interview */}
        <div className="feature-card">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Mock Interview"
              className="card-image"
            />
          </div>
          <h3>Mock Interview Practice</h3>
          <p>Prepare for real interviews with our simulated interview environment and feedback.</p>
        </div>

        {/* Card 3 - Resume Prep */}
        <div className="feature-card">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Resume Preparation"
              className="card-image"
            />
          </div>
          <h3>Resume Prep</h3>
          <p>Craft the perfect resume with our expert templates and personalized suggestions.</p>
        </div>

        {/* Card 4 - Mock Test */}
        <div className="feature-card">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Mock Test"
              className="card-image"
            />
          </div>
          <h3>Mock Test Prep</h3>
          <p>Test your knowledge with our realistic mock exams and detailed performance analysis.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;