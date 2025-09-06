import React, { useState, useEffect } from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Laptop, 
  Users, 
  Database,
  User,
  ArrowRight,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import './Header.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAnimation, setActiveAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAnimation((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">AimHrim</span>
          </div>
          <div className={`nav-menu${menuOpen ? ' open' : ''}`}>
            <button className="nav-link" onClick={() => scrollToSection("services")}>
              Services
            </button>
            <button className="nav-link" onClick={() => scrollToSection("about")}>
              About
            </button>
            <button className="nav-link" onClick={() => scrollToSection("tech")}>
              Tech Stack
            </button>
            <button className="nav-link" onClick={() => scrollToSection("contact")}>
              Contact
            </button>
            <button className="cta-button" onClick={() => setMenuOpen(false)}>QUICK CV DROP</button>
          </div>
          <button
            className={`mobile-menu-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </button>
        </div>
        {menuOpen && (
          <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
        )}
      </nav>

      {/* Hero Section */}
      <main className="hero-section modern-gradient-bg">
        <div className="hero-container">
          <div className="hero-content fade-in-up">
            <div className="hero-badge">
              <span className="badge-text">HIRE EXPERTS OR BE HIRED</span>
            </div>
            <h1 className="hero-title">
              Recruitment the way it should be.
            </h1>
            <p className="hero-description">
              AimHrim connects top IT talent with leading companies, powering digital transformation.<br />
              We deliver flexible staffing solutions for contract, project, and permanent roles.<br />
              Build your dream tech team with our expert recruiters and proven process.
            </p>
            <div className="hero-actions">
              <button className="get-connected-btn shine-anim">GET CONNECTED</button>
              <div className="social-icons">
                <a href="#" className="social-icon social-facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon social-twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-icon social-linkedin">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Animation Section */}
          <div className="hero-animation">
            <div className="animation-container">
              <div className="central-hub">
                <Briefcase size={32} className="hub-icon" />
                <div className="hub-pulse"></div>
              </div>

              <div className={`candidate candidate-1 ${activeAnimation === 0 ? 'active' : ''}`}>
                <User size={24} />
                <div className="skill-badge">React</div>
              </div>
              <div className={`candidate candidate-2 ${activeAnimation === 1 ? 'active' : ''}`}>
                <User size={24} />
                <div className="skill-badge">Node.js</div>
              </div>
              <div className={`candidate candidate-3 ${activeAnimation === 2 ? 'active' : ''}`}>
                <User size={24} />
                <div className="skill-badge">Python</div>
              </div>
              <div className={`candidate candidate-4 ${activeAnimation === 3 ? 'active' : ''}`}>
                <User size={24} />
                <div className="skill-badge">DevOps</div>
              </div>

              <div className="employer employer-1">
                <Laptop size={24} />
                <div className="job-opening">Frontend Dev</div>
              </div>
              <div className="employer employer-2">
                <Database size={24} />
                <div className="job-opening">Backend Dev</div>
              </div>
              <div className="employer employer-3">
                <Users size={24} />
                <div className="job-opening">Full Stack</div>
              </div>

              <div className="connection-lines">
                <div className={`connection-line line-1 ${activeAnimation === 0 ? 'active' : ''}`}></div>
                <div className={`connection-line line-2 ${activeAnimation === 1 ? 'active' : ''}`}></div>
                <div className={`connection-line line-3 ${activeAnimation === 2 ? 'active' : ''}`}></div>
                <div className={`connection-line line-4 ${activeAnimation === 3 ? 'active' : ''}`}></div>
              </div>

              <div className="success-indicators">
                <div className="success-icon success-1">
                  <CheckCircle size={20} />
                  <span>Match Found</span>
                </div>
                <div className="success-icon success-2">
                  <ArrowRight size={16} />
                  <span>Hired</span>
                </div>
              </div>

              <div className="code-particles">
                <div className="code-particle particle-1">{'<>'}</div>
                <div className="code-particle particle-2">{'{ }'}</div>
                <div className="code-particle particle-3">{'[ ]'}</div>
                <div className="code-particle particle-4">{'( )'}</div>
                <div className="code-particle particle-5">{'</>'}</div>
              </div>

              <div className="data-flow">
                <div className="data-packet packet-1"></div>
                <div className="data-packet packet-2"></div>
                <div className="data-packet packet-3"></div>
              </div>

              <div className="glow-effects">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
                <div className="glow glow-3"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
