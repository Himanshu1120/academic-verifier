// pages/About.jsx
import React from 'react';

const About = () => {
  const teamMembers = [
    { name: 'Himanshu Chaudhari', role: 'Project Lead' },
    { name: 'Tanmay Bothara', role: 'Backend Developer' },
    { name: 'Shailaja Bachhav', role: 'Frontend Developer' },
    { name: 'Piyush Patil', role: 'AI/ML Engineer' },
    { name: 'Mohit Pawar', role: 'Blockchain Specialist' },
    { name: 'Swami Patil', role: 'UI/UX Designer' }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Academic Verifier</h1>
        <p>Our mission to combat academic fraud and preserve institutional integrity</p>
      </div>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-avatar">
                {member.name.charAt(0)}
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <div className="vision-content">
          <p>
            We envision a world where academic credentials are universally verifiable, 
            trustworthy, and secure against forgery. Our platform leverages cutting-edge 
            technology including artificial intelligence, optical character recognition, 
            and blockchain to create an ecosystem where educational institutions, employers, 
            and verification agencies can seamlessly validate academic documents with 
            complete confidence.
          </p>
          <p>
            By providing a robust solution against certificate fraud, we aim to protect 
            the value of legitimate educational achievements and maintain the integrity 
            of academic institutions worldwide.
          </p>
        </div>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-content">
          <div className="impact-chart">
            <div className="chart-container">
              <div className="chart-bar" style={{height: '80%'}}>
                <span>80% Reduction</span>
                <p>In certificate fraud cases</p>
              </div>
              <div className="chart-label">Year 1</div>
            </div>
            <div className="chart-container">
              <div className="chart-bar" style={{height: '90%'}}>
                <span>90% Reduction</span>
                <p>In certificate fraud cases</p>
              </div>
              <div className="chart-label">Year 2</div>
            </div>
            <div className="chart-container">
              <div className="chart-bar" style={{height: '95%'}}>
                <span>95% Reduction</span>
                <p>In certificate fraud cases</p>
              </div>
              <div className="chart-label">Year 3</div>
            </div>
          </div>
          
          <div className="impact-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Educational Institutions Protected</p>
            </div>
            <div className="stat">
              <h3>10,000+</h3>
              <p>Successful Verifications Monthly</p>
            </div>
            <div className="stat">
              <h3>99.8%</h3>
              <p>Accuracy in Fraud Detection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;