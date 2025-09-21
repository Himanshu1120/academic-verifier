// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Secure Academic Credential Verification</h1>
          <p>Using AI and blockchain technology to combat degree fraud and protect academic integrity</p>
          <div className="hero-buttons">
            <Link to="/verify-document" className="btn-primary">
              Verify a Document
            </Link>
            <Link to="/sample-documents" className="btn-secondary">
              View Samples
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" alt="Academic Verification" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Verification System?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered Analysis</h3>
            <p>Advanced OCR and machine learning algorithms to detect even the most sophisticated forgeries</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Blockchain Security</h3>
            <p>Immutable record-keeping ensures credentials cannot be tampered with or falsified</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Verification</h3>
            <p>Real-time validation that provides results in seconds, not days or weeks</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <h2>Goals for a More Authentic Future</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>50,000+</h3>
            <p>Documents Verified</p>
          </div>
          <div className="stat-item">
            <h3>99.8%</h3>
            <p>Accuracy Rate</p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>Institutions Integrated</p>
          </div>
          <div className="stat-item">
            <h3>2,000+</h3>
            <p>Frauds Detected</p>
          </div>
        </div>
      </section>

      {/* Verification Output Section */}
      <section className="verification-output-section">
        <h2>Recent Verification Results</h2>
        <div className="output-cards">
          <div className="output-card verified">
            <div className="output-status">✅ Verified</div>
            <p>Bachelor of Technology Certificate from XYZ University</p>
          </div>
          <div className="output-card not-verified">
            <div className="output-status">❌ Not Verified</div>
            <p>Engineering Diploma from ABC Institute (suspected forgery)</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Verify Documents?</h2>
        <p>Join hundreds of institutions and employers who trust our verification system</p>
        <Link to="/verify-document" className="btn-primary">
          Start Verifying Now
        </Link>
      </section>
    </div>
  );
};

export default Home;