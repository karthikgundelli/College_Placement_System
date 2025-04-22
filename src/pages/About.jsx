import React from 'react';
import './Style.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // For navigation links

const About = () => {
  return (
    <div>

      {/* About Us Section */}
      <section className="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to the College Placement System, your one-stop solution for campus placements and career development.
        </p>

        {/* Advantages of College Placements */}
        <div className="advantages">
          <h2>Advantages of College Placements</h2>
          <div className="advantages-list">
            <div className="advantage-card">
              <img
                src="https://www.eace.org/assets/images/Career%20Opportunities.jpg"
                alt="Career Opportunities"
              />
              <h3>Career Opportunities</h3>
              <p>Access to top companies and job opportunities right from your campus.</p>
            </div>
            <div className="advantage-card">
              <img
                src="https://track2traininginstitute.files.wordpress.com/2021/06/skill-development.jpg"
                alt="Skill Development"
              />
              <h3>Skill Development</h3>
              <p>Enhance your skills through training programs, mock tests, and workshops.</p>
            </div>
            <div className="advantage-card">
              <img
                src="https://c8.alamy.com/comp/RY8XEM/global-network-connection-concept-big-data-visualization-social-network-communication-in-the-global-computer-networks-internet-technology-business-RY8XEM.jpg"
                alt="Networking"
              />
              <h3>Networking</h3>
              <p>Connect with industry professionals and build your professional network.</p>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="message-form">
          <u>
            <h2>Contact Us</h2>
          </u>
          <form action="https://formspree.io/f/mvgzqray" method="POST">
            <label>
              Your email:
              <input type="email" name="email" />
            </label>
            <label>
              NAME:
              <input type="text" name="NAME" />
            </label>
            <label>
              Address:
              <input type="text" name="Address" />
            </label>
            <label>
              Your message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
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

export default About;