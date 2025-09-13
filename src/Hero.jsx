import React, { useState, useEffect } from "react";
import { Laptop, Users, Database, User, ArrowRight, CheckCircle, Briefcase } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const [activeAnimation, setActiveAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnimation((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="hero-section modern-gradient-bg">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content fade-in-up">
          <div className="hero-badge">
            <span className="badge-text">HIRE EXPERTS OR BE HIRED</span>
          </div>
          <h1 className="hero-title">Recruitment the way it should be.</h1>
          <p className="hero-description">
            AimHrim connects top IT talent with leading companies, powering digital transformation.
            We deliver flexible staffing solutions for contract, project, and permanent roles. Build your dream tech team with our expert recruiters and proven process.
          </p>
          <div className="hero-actions">
            <button className="get-connected-btn shine-anim">GET CONNECTED</button>
          </div>
        </div>

        {/* Right Animation */}
        <div className="hero-animation">
          <div className="animation-container">
            <div className="central-hub">
              <Briefcase size={32} className="hub-icon" />
              <div className="hub-pulse"></div>
            </div>

            <div className={`candidate candidate-1 ${activeAnimation === 0 ? "active" : ""}`}>
              <User size={24} /> <div className="skill-badge">React</div>
            </div>
            <div className={`candidate candidate-2 ${activeAnimation === 1 ? "active" : ""}`}>
              <User size={24} /> <div className="skill-badge">Node.js</div>
            </div>
            <div className={`candidate candidate-3 ${activeAnimation === 2 ? "active" : ""}`}>
              <User size={24} /> <div className="skill-badge">Python</div>
            </div>
            <div className={`candidate candidate-4 ${activeAnimation === 3 ? "active" : ""}`}>
              <User size={24} /> <div className="skill-badge">DevOps</div>
            </div>

            <div className="employer employer-1">
              <Laptop size={24} /><div className="job-opening">Frontend Dev</div>
            </div>
            <div className="employer employer-2">
              <Database size={24} /><div className="job-opening">Backend Dev</div>
            </div>
            <div className="employer employer-3">
              <Users size={24} /><div className="job-opening">Full Stack</div>
            </div>

            <div className="connection-lines">
              <div className={`connection-line line-1 ${activeAnimation === 0 ? "active" : ""}`}></div>
              <div className={`connection-line line-2 ${activeAnimation === 1 ? "active" : ""}`}></div>
              <div className={`connection-line line-3 ${activeAnimation === 2 ? "active" : ""}`}></div>
              <div className={`connection-line line-4 ${activeAnimation === 3 ? "active" : ""}`}></div>
            </div>

            <div className="success-indicators">
              <div className="success-icon success-1">
                <CheckCircle size={20} /><span>Match Found</span>
              </div>
              <div className="success-icon success-2">
                <ArrowRight size={16} /><span>Hired</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
