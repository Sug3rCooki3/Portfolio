import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="landing-header">
        <div className="container header-content">
          <div className="logo" role="banner">AI.ENGINEER</div>
          <nav aria-label="Main Navigation">
            <ul className="nav-list">
              <li><Link to="/portfolio#services" className="nav-link">Work</Link></li>
              <li><Link to="/portfolio#about" className="nav-link">About</Link></li>
              <li><Link to="/portfolio#contact" className="nav-link">Contact</Link></li>
              <li><Link to="/portfolio" className="btn btn-primary nav-cta">Enter Portfolio</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="landing-hero" aria-labelledby="hero-heading">
          <div className="container hero-content">
            <h1 id="hero-heading" className="hero-title">
              I Engineer AI Products That <span className="highlight">Dominate Markets.</span>
            </h1>
            <p className="hero-subtitle">
              Turn operational chaos into competitive advantage with production-ready AI systems.
            </p>
            <div className="cta-group">
              <Link to="/portfolio" className="btn btn-primary btn-large">Enter Portfolio</Link>
              <Link to="/portfolio#contact" className="btn btn-outline btn-large">Book a Strategy Call</Link>
            </div>
            
            <div className="credibility-strip">
              <p className="credibility-text">Trusted by Visionaries at:</p>
              <div className="logos" aria-label="Client Logos">
                <span className="logo-item">TECH_CORP</span>
                <span className="logo-item">FUTURE_LABS</span>
                <span className="logo-item">INNOVATE_INC</span>
                <span className="logo-item">DATA_DYNAMICS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Capabilities */}
        <section className="capabilities" aria-labelledby="capabilities-heading">
          <div className="container">
            <h2 id="capabilities-heading" className="section-title">Mission Critical Capabilities</h2>
            <div className="grid capabilities-grid">
              <div className="card capability-card">
                <h3>Ship Faster</h3>
                <p>Rapid prototyping and deployment of LLM-powered applications.</p>
                <Link to="/portfolio#services" className="text-link">View Strategy &rarr;</Link>
              </div>
              <div className="card capability-card">
                <h3>Scale with Confidence</h3>
                <p>Robust RAG pipelines engineered for enterprise data loads.</p>
                <Link to="/portfolio#services" className="text-link">See Architecture &rarr;</Link>
              </div>
              <div className="card capability-card">
                <h3>Delight Users</h3>
                <p>Intuitive, accessible interfaces that mask complex AI logic.</p>
                <Link to="/portfolio#services" className="text-link">Explore UX &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Project Teaser */}
        <section className="project-teaser" aria-labelledby="project-heading">
          <div className="container teaser-content">
            <div className="teaser-text">
              <h2 id="project-heading">Case Study: FinTech Automation</h2>
              <p className="metric">-42% TTFB, +18% Conversion</p>
              <p>
                Re-engineered a legacy financial dashboard into a real-time, AI-driven insight engine.
              </p>
              <Link to="/portfolio#services" className="btn btn-outline">See the full build</Link>
            </div>
            <div className="teaser-visual" role="img" aria-label="Abstract visualization of data flow and efficiency gains">
              {/* Placeholder for project image */}
              <div className="visual-placeholder">Project Visualization</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="container footer-content">
          <div className="footer-links">
            <Link to="/portfolio#contact">Contact</Link>
            <a href="https://github.com/Sug3rCooki3" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="footer-meta">
            <p>&copy; 2025 AI Product Engineer.</p>
            <Link to="/accessibility" className="small-link">Accessibility Statement</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
