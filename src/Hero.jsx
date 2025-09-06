import React from 'react';
import { ArrowRight, Shield, Users, Zap, CheckCircle } from 'lucide-react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield className="badge-icon" />
            <span>Premier IT Solutions Provider</span>
          </div>
          
          <h1 className="hero-title">
            Transforming Businesses Through
            <span className="title-highlight"> Strategic IT Excellence</span>
          </h1>
          
          <p className="hero-description">
            Aimhrim delivers cutting-edge IT consulting and staffing solutions that drive 
            innovation, optimize operations, and accelerate growth for forward-thinking organizations.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button className="btn-primary">
              Get Started
              <ArrowRight className="btn-icon" />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <span>Scalable Solutions</span>
            </div>
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <span>Expert Team</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-card">
            <div className="card-header">
              <Users className="card-icon" />
              <div className="card-title">IT Consulting</div>
            </div>
            <div className="card-content">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '92%'}}></div>
              </div>
              <span className="progress-label">Digital Transformation</span>
            </div>
          </div>
          
          <div className="visual-card">
            <div className="card-header">
              <Zap className="card-icon" />
              <div className="card-title">Staff Augmentation</div>
            </div>
            <div className="card-content">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '88%'}}></div>
              </div>
              <span className="progress-label">Talent Acquisition</span>
            </div>
          </div>
          
          <div className="floating-elements">
            <div className="floating-dot dot-1"></div>
            <div className="floating-dot dot-2"></div>
            <div className="floating-dot dot-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;