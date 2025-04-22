import React from 'react';
import './PlacementPage.css'; // We'll create this CSS file next

const PlacementPage = () => {
  return (
    <div className="placement-container">
      <div className="placement-grid">
        {/* Left Side - Image */}
        <div className="placement-image-container">
          <img 
            src="https://miro.medium.com/v2/resize:fit:960/0*H5b3TYySaiSIO3Xn.png"
            alt="Students getting placement help" 
            className="placement-image"
          />
        </div>
        
        {/* Right Side - Content */}
        <div className="placement-content">
          <h1 className="placement-title"><u>Who We Are?</u></h1>
          <p className="placement-text">
            We are the College Placement Support System, dedicated to helping students 
            excel in their campus placements and launch successful careers. Our team 
            of industry experts, career counselors, and alumni mentors work together 
            to prepare students for the competitive job market.
          </p>
          
          <div className="placement-stats">
            <div className="stat-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>Companies Recruited</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Students Placed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementPage;