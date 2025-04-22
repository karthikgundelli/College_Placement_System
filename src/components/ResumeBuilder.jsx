import React, { useState } from 'react';
import { jsPDF } from 'jspdf'; // Import jsPDF for generating PDFs
import './Resume.css'; // Import the CSS file for styling

const ResumeBuilder = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  // Function to handle template selection
  const selectTemplate = (template) => {
    alert(`Selected Template: ${template}`);
    // You can add logic to change the form layout based on the template
  };

  // Function to generate and download the resume
  const generateResume = () => {
    const doc = new jsPDF();

    // Add content to PDF
    doc.setFontSize(22);
    doc.text(name, 10, 20);
    doc.setFontSize(12);
    doc.text(`Email: ${email} | Phone: ${phone}`, 10, 30);
    doc.text('Education:', 10, 40);
    doc.text(education, 10, 50);
    doc.text('Skills:', 10, 70);
    doc.text(skills, 10, 80);
    doc.text('Experience:', 10, 100);
    doc.text(experience, 10, 110);

    // Save the PDF
    doc.save('resume.pdf');
  };

  return (
    <div>
      {/* Resume Builder Section */}
      <section className="resume-builder">
        <h1>Resume Builder</h1>
        <p>Create your professional resume using our templates and download it in PDF format.</p>

        {/* Resume Templates */}
        <div className="templates">
          <h2>Choose a Template</h2>
          <div className="template-list">
            <div className="template-card" onClick={() => selectTemplate('template1')}>
              <img src="https://via.placeholder.com/300x400.png?text=Template+1" alt="Template 1" />
              <p>Template 1</p>
            </div>
            <div className="template-card" onClick={() => selectTemplate('template2')}>
              <img src="https://via.placeholder.com/300x400.png?text=Template+2" alt="Template 2" />
              <p>Template 2</p>
            </div>
            <div className="template-card" onClick={() => selectTemplate('template3')}>
              <img src="https://via.placeholder.com/300x400.png?text=Template+3" alt="Template 3" />
              <p>Template 3</p>
            </div>
          </div>
        </div>

        {/* Resume Form */}
        <div className="resume-form">
          <h2>Fill in Your Details</h2>
          <form id="resumeForm">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <label htmlFor="education">Education:</label>
            <textarea
              id="education"
              rows="3"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              required
            ></textarea>

            <label htmlFor="skills">Skills:</label>
            <textarea
              id="skills"
              rows="3"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            ></textarea>

            <label htmlFor="experience">Experience:</label>
            <textarea
              id="experience"
              rows="3"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            ></textarea>

            <button type="button" onClick={generateResume}>
              Download Resume
            </button>
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

export default ResumeBuilder;