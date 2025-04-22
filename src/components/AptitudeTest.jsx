import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Aptitude.css'

const AptitudeTest = () => {
  const navigate = useNavigate(); // Define navigate

  // Sample list of companies
  const [companies] = useState([
    'Tech Corp',
    'Innovate Inc.',
    'Global Solutions',
    'Future Tech',
    'Data Minds',
    'Cloud Innovators',
    'Code Masters',
    'AI Pioneers',
    'Web Wizards',
    'Software Giants',
    'Digital Creations',
    'Tech Titans',
    'Next Gen Tech',
    'Smart Solutions',
    'Code Crafters',
    'Innovative Labs',
    'Tech Visionaries',
    'Data Wizards',
    'Cloud Masters',
    'AI Experts',
    'Web Innovators',
    'Software Crafters',
    'Digital Pioneers',
    'Tech Leaders',
    'Next Gen Solutions',
    'Smart Innovators',
    'Code Experts',
    'Innovative Minds',
    'Tech Wizards',
    'Data Pioneers',
    'Cloud Experts',
    'AI Leaders',
    'Web Masters',
    'Software Pioneers',
    'Digital Wizards',
    'Tech Experts',
    'Next Gen Leaders',
    'Smart Pioneers',
    'Code Leaders',
    'Innovative Experts',
    'Tech Masters',
    'Data Leaders',
    'Cloud Pioneers',
    'AI Wizards',
    'Web Experts',
    'Software Leaders',
    'Digital Masters',
    'Tech Pioneers',
    'Next Gen Wizards',
    'Smart Leaders',
  ]);

  // Function to handle company selection
  const handleCompanySelect = (company) => {
    navigate(`/aptitude/${company}`); // Navigate to the practice session page
  };

  // Function to handle test card click
  const handleTestCardClick = (testName) => {
    alert(`You clicked on ${testName}`); // Replace with actual navigation logic
  };

  return (
    <div>
      {/* Aptitude Tests Section */}
      <section className="aptitude-tests">
        <h1>Aptitude Practice</h1>
        <p>Practice aptitude tests for top companies and take mock tests to improve your skills.</p>

        {/* Company-wise Tests */}
        <div className="company-tests">
          <h2>Company-wise Tests</h2>
          <div className="test-list">
            {companies.map((company, index) => (
              <div
                key={index}
                className="test-card"
                onClick={() => handleCompanySelect(company)}
              >
                <h3>{company}</h3>
                <p>Practice aptitude questions for {company}.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Tests */}
        <div className="mock-tests">
          <h2>Mock Tests</h2>
          <div className="test-list">
            <div className="test-card" onClick={() => handleTestCardClick('Mock Test 1')}>
              <h3>Mock Test 1</h3>
              <p>General aptitude questions for practice.</p>
            </div>
            <div className="test-card" onClick={() => handleTestCardClick('Mock Test 2')}>
              <h3>Mock Test 2</h3>
              <p>Advanced aptitude questions for practice.</p>
            </div>
            <div className="test-card" onClick={() => handleTestCardClick('Mock Test 3')}>
              <h3>Mock Test 3</h3>
              <p>Time-based aptitude questions for practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 College Placement System. All Rights Reserved.</p>
        <p>&reg; Contact us @collegeplacement.in</p>
        <p>Made with ❤️ by Karthik</p>
      </footer>
    </div>
  );
};

export default AptitudeTest;