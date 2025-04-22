import React from 'react';
import './OurStaff.css'; // We'll create this CSS file next

const OurStaff = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Senior Career Counselor",
      qualification: "Ph.D. in Psychology, Certified Career Coach",
      bio: "With over 15 years of experience helping students find their career paths.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      position: "Technical Interview Specialist",
      qualification: "M.S. in Computer Science, Former Tech Lead",
      bio: "Specializes in preparing students for technical interviews at top tech companies.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      position: "Resume & LinkedIn Expert",
      qualification: "HR Certification, Talent Acquisition Specialist",
      bio: "Helped over 500 students craft winning resumes and professional profiles.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300"
    }
  ];

  return (
    <div className="our-staff-page">
      <h1 className="page-title">Our Staff</h1>
      <p className="page-subtitle">Meet our dedicated team of career guidance professionals</p>
      
      <div className="staff-container">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="staff-card">
            <div className="staff-image-container">
              <img src={staff.image} alt={staff.name} className="staff-image" />
            </div>
            <div className="staff-details">
              <h2 className="staff-name">{staff.name}</h2>
              <h3 className="staff-position">{staff.position}</h3>
              <p className="staff-qualification">{staff.qualification}</p>
              <p className="staff-bio">{staff.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStaff;