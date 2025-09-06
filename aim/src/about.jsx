import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Target, 
  Zap, 
  Globe, 
  Award, 
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Shield,
  Rocket
} from 'lucide-react';
import './about.css';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(prev => ({
              ...prev,
              [key]: entry.isIntersecting
            }));
          },
          { threshold: 0.1, rootMargin: '-50px' }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const expertise = [
    {
      icon: <Zap className="expertise-icon" />,
      title: "Rapid Deployment",
      description: "Lightning-fast talent acquisition with our streamlined process and extensive network of pre-vetted professionals.",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Target className="expertise-icon" />,
      title: "Precision Matching",
      description: "AI-powered algorithms combined with human insight to ensure perfect cultural and technical alignment.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Shield className="expertise-icon" />,
      title: "Quality Assurance",
      description: "Rigorous screening processes and continuous performance monitoring to guarantee exceptional results.",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Rocket className="expertise-icon" />,
      title: "Growth Partnership",
      description: "Long-term strategic partnerships that scale with your business and technological evolution.",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const advantages = [
    { text: "Industry-leading expertise across all tech domains", icon: <Lightbulb /> },
    { text: "Global talent network with local market insights", icon: <Globe /> },
    { text: "Agile methodologies adapted for modern workforces", icon: <Zap /> },
    { text: "Comprehensive support throughout the engagement lifecycle", icon: <Shield /> }
  ];

  return (
    <section id="about" className="about-section">
      {/* Dynamic Background */}
      <div 
        className="about-background-gradient"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        }}
      />
      
      <div className="about-container">
        {/* Hero Section */}
        <div 
          className={`about-hero ${isVisible.hero ? 'about-visible' : ''}`}
          ref={el => sectionRefs.current.hero = el}
        >
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <Award className="about-badge-icon" />
              <span>Transforming IT Talent Acquisition</span>
            </div>
            
            {/* <h1 className="about-hero-title">
              Where Innovation Meets
              <span className="about-title-accent"> Excellence</span>
            </h1> */}
            
            {/* <p className="about-hero-description">
              We don't just place talent—we architect careers and build the future of technology. 
              Our sophisticated approach combines cutting-edge recruitment methodologies with deep 
              industry expertise to create lasting partnerships that drive innovation.
            </p> */}
            
            {/* <div className="about-hero-cta">
              <button className="about-cta-primary">
                Discover Our Approach
                <ArrowRight className="about-cta-icon" />
              </button>
              <button className="about-cta-secondary">
                View Success Stories
              </button>
            </div> */}
          </div>
    
        </div>

        {/* Expertise Section */}
        <div 
          className={`about-expertise ${isVisible.expertise ? 'about-visible' : ''}`}
          ref={el => sectionRefs.current.expertise = el}
        >
          <div className="about-section-header">
            <div className="about-section-label">Our Expertise</div>
            <h2 className="about-section-title">
              Redefining Excellence in
              <span className="about-text-gradient"> IT Staffing</span>
            </h2>
          </div>
          
          <div className="about-expertise-grid">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="about-expertise-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className={`about-card-gradient bg-gradient-to-br ${item.gradient}`}></div>
                <div className="about-card-content">
                  <div className="about-card-header">
                    <div className="about-icon-wrapper">
                      {item.icon}
                    </div>
                    <h3 className="about-card-title">{item.title}</h3>
                  </div>
                  <p className="about-card-description">{item.description}</p>
                </div>
                <div className="about-card-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div 
          className={`about-vision ${isVisible.vision ? 'about-visible' : ''}`}
          ref={el => sectionRefs.current.vision = el}
        >
          <div className="about-vision-content">
            <div className="about-vision-text">
              <div className="about-section-label">Our Vision</div>
              <h2 className="about-vision-title">
                Pioneering the Future of
                <span className="about-text-gradient"> Technology Careers</span>
              </h2>
              
              <p className="about-vision-description">
                We envision a world where exceptional talent seamlessly connects with groundbreaking 
                opportunities. Our mission transcends traditional recruitment—we're building an ecosystem 
                where innovation thrives, careers flourish, and organizations achieve unprecedented growth.
              </p>
              
              <div className="about-advantages-list">
                {advantages.map((advantage, index) => (
                  <div key={index} className="about-advantage-item" style={{ '--delay': `${index * 0.1}s` }}>
                    <div className="about-advantage-icon">
                      {advantage.icon}
                    </div>
                    <span className="about-advantage-text">{advantage.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-vision-visual">
              <div className="about-floating-elements">
                <div className="about-floating-card about-card-1">
                  <Users className="about-floating-icon" />
                  <div className="about-floating-content">
                    <div className="about-floating-title">Global Network</div>
                    <div className="about-floating-desc">Worldwide talent pool</div>
                  </div>
                </div>
                
                <div className="about-floating-card about-card-2">
                  <Target className="about-floating-icon" />
                  <div className="about-floating-content">
                    <div className="about-floating-title">Precision Matching</div>
                    <div className="about-floating-desc">AI-driven selection</div>
                  </div>
                </div>
                
                <div className="about-floating-card about-card-3">
                  <Zap className="about-floating-icon" />
                  <div className="about-floating-content">
                    <div className="about-floating-title">Rapid Results</div>
                    <div className="about-floating-desc">Lightning-fast delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        {/* <div 
          className={`about-commitment ${isVisible.commitment ? 'about-visible' : ''}`}
          ref={el => sectionRefs.current.commitment = el}
        >
          <div className="about-commitment-container">
            <div className="about-commitment-content">
              <div className="about-commitment-badge">
                <Award className="about-badge-icon" />
                <span className='about-commitment-text'>Our Commitment</span>
              </div>
              <h2 className="about-commitment-title">
                Our Commitment to
                <span className="about-text-gradient"> Excellence</span>
              </h2>
              
              <p className="about-commitment-description">
                Every partnership we forge is built on trust, innovation, and mutual success. 
                We don't just meet expectations—we redefine what's possible in IT talent acquisition.
              </p>
              
              <div className="about-commitment-features">
                <div className="about-feature-item">
                  <CheckCircle2 className="about-feature-icon" />
                  <span>Dedicated Account Management</span>
                </div>
                <div className="about-feature-item">
                  <CheckCircle2 className="about-feature-icon" />
                  <span>Continuous Quality Monitoring</span>
                </div>
                <div className="about-feature-item">
                  <CheckCircle2 className="about-feature-icon" />
                  <span>Strategic Growth Partnership</span>
                </div>
              </div>
            </div>  
            
            <div className="about-commitment-visual">
              <div className="about-pulse-container">
                <div className="about-pulse-ring about-ring-1"></div>
                <div className="about-pulse-ring about-ring-2"></div>
                <div className="about-pulse-ring about-ring-3"></div>
                <div className="about-pulse-center">
                  <Award className="about-pulse-icon" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;