import React, { useState, useEffect, useRef } from 'react'; 
import { 
  Users, 
  Target, 
  Zap, 
  Globe, 
  Award, 
  ArrowRight,
  Shield,
  Rocket,
  Star,
  TrendingUp,
  Cpu,
  Database
} from 'lucide-react';
import './about.css';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [activeCard, setActiveCard] = useState(null);
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
      icon: <Cpu className="about-expertise-icon" />,
      title: "AI-Powered Matching",
      description: "Leverage cutting-edge algorithms to match talent with precision, ensuring perfect fit for your technical requirements and company culture.",
      metrics: "95% Success Rate"
    },
    {
      icon: <TrendingUp className="about-expertise-icon" />,
      title: "Scalable Solutions",
      description: "From startup MVP teams to enterprise transformations, we adapt our approach to meet your unique scaling challenges.",
      metrics: "500+ Projects"
    },
    {
      icon: <Shield className="about-expertise-icon" />,
      title: "Quality Assurance",
      description: "Multi-layered vetting process including technical assessments, cultural fit analysis, and continuous performance monitoring.",
      metrics: "99.8% Retention"
    },
    {
      icon: <Database className="about-expertise-icon" />,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics and market intelligence to guide strategic talent decisions and optimize hiring outcomes.",
      metrics: "Real-time Analytics"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div 
        className="about-background-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)`
        }}
      />
      
      <div className="about-container">
        {/* Expertise Section */}
        <div 
          className={`about-expertise ${isVisible.expertise ? 'about-animate-in' : ''}`}
          ref={el => sectionRefs.current.expertise = el}
        >
          <div className="about-section-header">
            <span className="about-section-badge">Our Expertise</span>
            <h2 className="about-section-title">
              Why Leading Companies
              <span className="about-title-gradient"> Choose Us</span>
            </h2>
            <p className="about-section-subtitle">
              We don't just fill positions—we architect the future of your technology teams
            </p>
          </div>
          
          <div className="about-expertise-grid">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className={`about-expertise-card ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="about-card-header">
                  <div className="about-card-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="about-card-text">
                    <h3 className="about-card-title">{item.title}</h3>
                    <p className="about-card-description">{item.description}</p>
                  </div>
                  <div className="about-card-metric">{item.metrics}</div>
                </div>
                <div className="about-card-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div 
          className={`about-process ${isVisible.process ? 'about-animate-in' : ''}`}
          ref={el => sectionRefs.current.process = el}
        >
          <div className="about-section-header">
            <span className="about-section-badge">Our Process</span>
            <h2 className="about-section-title">
              Streamlined Path to
              <span className="about-title-gradient"> Success</span>
            </h2>
          </div>
          
          <div className="about-process-steps">
            <div className="about-step">
              <div className="about-step-number">01</div>
              <div className="about-step-content">
                <h3 className="about-step-title">Discovery & Analysis</h3>
                <p className="about-step-description">
                  Deep dive into your technical requirements, company culture, and growth objectives
                </p>
              </div>
            </div>
            
            <div className="about-step-connector"></div>
            
            <div className="about-step">
              <div className="about-step-number">02</div>
              <div className="about-step-content">
                <h3 className="about-step-title">Talent Sourcing</h3>
                <p className="about-step-description">
                  AI-powered search across global networks combined with targeted headhunting
                </p>
              </div>
            </div>
            
            <div className="about-step-connector"></div>
            
            <div className="about-step">
              <div className="about-step-number">03</div>
              <div className="about-step-content">
                <h3 className="about-step-title">Precision Matching</h3>
                <p className="about-step-description">
                  Comprehensive evaluation including technical skills, cultural fit, and career alignment
                </p>
              </div>
            </div>
            
            <div className="about-step-connector"></div>
            
            <div className="about-step">
              <div className="about-step-number">04</div>
              <div className="about-step-content">
                <h3 className="about-step-title">Seamless Integration</h3>
                <p className="about-step-description">
                  Ongoing support and optimization to ensure long-term success and retention
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className={`about-cta ${isVisible.cta ? 'about-animate-in' : ''}`}
          ref={el => sectionRefs.current.cta = el}
        >
          
          <div className="about-cta-visual">
            <div className="about-orbit-container">
              <div className="about-orbit-ring orbit-1">
                <div className="about-orbit-dot dot-1"><Users /></div>
              </div>
              <div className="about-orbit-ring orbit-2">
                <div className="about-orbit-dot dot-2"><Target /></div>
                <div className="about-orbit-dot dot-3"><Zap /></div>
              </div>
              <div className="about-orbit-ring orbit-3">
                <div className="about-orbit-dot dot-4"><Shield /></div>
                <div className="about-orbit-dot dot-5"><Rocket /></div>
                <div className="about-orbit-dot dot-6"><Star /></div>
              </div>
              <div className="about-orbit-center">
                <Award />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
