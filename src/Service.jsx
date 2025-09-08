import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Code, 
  Shield, 
  Database, 
  Smartphone, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award,
  Zap,
  Target
} from 'lucide-react';
import './Service.css';

const Service = () => {
  const [activeService, setActiveService] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStats, setCurrentStats] = useState([0, 0, 0, 0]);

  const services = [
    {
      id: 1,
      icon: <Code className="service-icon" />,
      title: "Software Development",
      subtitle: "Full-Stack Excellence",
      description: "Elite developers specializing in modern frameworks and cutting-edge technologies.",
      features: ["React/Vue/Angular Experts", "Node.js/Python/Java Masters", "Mobile App Specialists", "DevOps Champions"],
      demand: "Extreme",
      avgSalary: "$85-150k",
      positions: 450,
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
     {
      id: 2,
      icon: <Smartphone className="service-icon" />,
      title: "Mobile Development",
      subtitle: "Pocket-Sized Perfection",
      description: "Mobile app developers creating exceptional user experiences across platforms.",
      features: ["iOS Swift Masters", "Android Kotlin Pros", "React Native Experts", "Flutter Champions"],
      demand: "High",
      avgSalary: "$80-140k",
      positions: 270,
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
    },
    
    {
      id: 3,
      icon: <Database className="service-icon" />,
      title: "Data & AI",
      subtitle: "Intelligence Revolution",
      description: "Data scientists and AI engineers transforming raw data into business insights.",
      features: ["ML/AI Engineers", "Data Scientists", "Analytics Experts", "Big Data Architects",  "Data Analysts"],
      demand: "Very High",
      avgSalary: "$90-170k",
      positions: 380,
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
    },
    {
      id: 4,
      icon: <Cloud className="service-icon" />,
      title: "Cloud Solutions",
      subtitle: "Sky-High Innovation",
      description: "Cloud architects and engineers building scalable, resilient infrastructure.",
      features: ["AWS/Azure/GCP Masters", "Kubernetes Experts", "Cloud Architects", "Migration Specialists"],
      demand: "Extreme",
      avgSalary: "$100-190k",
      positions: 290,
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      id: 5,
      icon: <Shield className="service-icon" />,
      title: "Cybersecurity",
      subtitle: "Digital Fortress Builders",
      description: "Certified security experts protecting businesses from evolving cyber threats.",
      features: ["Security Architects", "Ethical Hackers", "Compliance Specialists", "SOC Analysts"],
      demand: "Extreme",
      avgSalary: "$95-180k",
      positions: 320,
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444, #dc2626)"
    },
    {
      id: 6,
      icon: <Users className="service-icon" />,
      title: "Digital Leadership",
      subtitle: "Transformation Architects",
      description: "Strategic leaders guiding organizations through digital transformation journeys.",
      features: ["Tech Directors", "Solution Architects", "Agile Coaches", "Digital Strategists"],
      demand: "High",
      avgSalary: "$110-220k",
      positions: 150,
      color: "#6366f1",
      gradient: "linear-gradient(135deg, #6366f1, #4f46e5)"
    }
  ];

  const stats = [
    { icon: <Users />, target: 12500, label: "IT Professionals", suffix: "+" },
    { icon: <Star />, target: 98, label: "Success Rate", suffix: "%" },
    { icon: <TrendingUp />, target: 750, label: "Placements/Month", suffix: "+" },
    { icon: <Clock />, target: 24, label: "Avg Response", suffix: "hr" }
  ];

  // Animate stats on load
  useEffect(() => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCurrentStats(prev => {
          const newStats = [...prev];
          newStats[index] = Math.floor(current);
          return newStats;
        });
      }, 50);
    });

    // Animate cards appearance
    services.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 100);
    });
  }, []);

  const getDemandColor = (demand) => {
    switch(demand) {
      case 'Extreme': return '#ef4444';
      case 'Very High': return '#f59e0b';
      case 'High': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Animated Header */}
        <div className="services-header">
          <div className="header-badge">
            <Award className="badge-icon" />
            <span>Premium IT Staffing Solutions</span>
          </div>
          <h2 className="main-title">
            Transform Your Business with
            <span className="gradient-text"> Elite IT Talent</span>
          </h2>
          <p className="subtitle">
            Access top 1% of IT professionals across all domains. From startups to Fortune 500, 
            we deliver exceptional talent that drives innovation and growth.
          </p>
        </div>

        {/* Dynamic Stats */}
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-number">
                    {currentStats[index].toLocaleString()}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                <div className="stat-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card ${visibleCards.includes(index) ? 'visible' : ''} ${activeService === service.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{
                '--service-color': service.color,
                '--service-gradient': service.gradient,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="card-glow"></div>
              
              <div className="service-header">
                <div className="icon-container">
                  <div className="icon-wrapper">
                    {service.icon}
                  </div>
                  <div className="icon-bg"></div>
                </div>
                
                <div className="header-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>

                <div className="service-badges">
                  <span 
                    className="demand-badge"
                    style={{ backgroundColor: getDemandColor(service.demand) + '20', color: getDemandColor(service.demand) }}
                  >
                    {service.demand}
                  </span>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-metrics">
                <div className="metric">
                  <Target className="metric-icon" />
                  <span>{service.positions} positions</span>
                </div>
                <div className="metric">
                  <Zap className="metric-icon" />
                  <span>{service.avgSalary}</span>
                </div>
              </div>

              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="service-cta">
                <span>Explore Talent</span>
                <ArrowRight className="arrow-icon" />
                <div className="button-glow"></div>
              </button>

              <div className="card-border"></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        {/* <div className="services-cta">
          <div className="cta-content">
            <div className="cta-badge">
              <Star className="badge-icon" />
              <span>Ready to Scale?</span>
            </div>
            <h3>Let's Build Your Dream Team</h3>
            <p>Join 500+ companies that trust us with their most critical hiring needs</p>
            
            <div className="cta-buttons">
              <button className="btn-primary">
                <span>Start Hiring Now</span>
                <ArrowRight className="btn-arrow" />
              </button>
              <button className="btn-secondary">
                <span>Schedule Demo</span>
              </button>
            </div>
          </div>
          <div className="cta-glow"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Service;