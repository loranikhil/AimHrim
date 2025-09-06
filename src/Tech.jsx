import React, { useState } from 'react';
import { Code, Smartphone, Server, Globe, ChevronRight, Zap, Shield, Layers } from 'lucide-react';
import './Tech.css';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend Technologies',
      icon: Globe,
      description: 'Modern frameworks and libraries for exceptional user experiences',
      technologies: [
        {
          name: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          description: 'Component-based UI library',
          popularity: 95
        },
        {
          name: 'Vue.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          description: 'Progressive JavaScript framework',
          popularity: 88
        },
        {
          name: 'Angular',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
          description: 'Full-featured web framework',
          popularity: 82
        },
        {
          name: 'Next.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          description: 'React production framework',
          popularity: 90
        },
        {
          name: 'TypeScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          description: 'Typed JavaScript superset',
          popularity: 92
        },
       {
          name: 'Tailwind CSS',
          logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
          description: 'Utility-first CSS framework',
          popularity: 85
        }

      ]
    },
    backend: {
      title: 'Backend Technologies',
      icon: Server,
      description: 'Robust server-side solutions and database management',
      technologies: [
        {
          name: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          description: 'JavaScript runtime environment',
          popularity: 93
        },
        {
          name: 'Python',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          description: 'Versatile programming language',
          popularity: 96
        },
        {
          name: 'Java',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          description: 'Enterprise-grade language',
          popularity: 89
        },
        {
          name: 'MongoDB',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          description: 'NoSQL document database',
          popularity: 87
        },
        {
          name: 'PostgreSQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          description: 'Advanced relational database',
          popularity: 91
        },
        {
          name: 'Docker',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          description: 'Containerization platform',
          popularity: 88
        }
      ]
    },
    mobile: {
      title: 'Mobile Technologies',
      icon: Smartphone,
      description: 'Cross-platform and native mobile development solutions',
      technologies: [
        {
          name: 'React Native',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          description: 'Cross-platform mobile apps',
          popularity: 89
        },
        {
          name: 'Flutter',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
          description: 'Google\'s UI toolkit',
          popularity: 86
        },
        {
          name: 'Swift',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
          description: 'iOS native development',
          popularity: 84
        },
        {
          name: 'Kotlin',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
          description: 'Android native development',
          popularity: 82
        },
        {
          name: 'Ionic',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
          description: 'Hybrid mobile framework',
          popularity: 75
        },
        {
          name: 'Xamarin',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg',
          description: 'Microsoft cross-platform',
          popularity: 72
        }
      ]
    }
  };

  const categoryIcons = {
    frontend: Globe,
    backend: Server,
    mobile: Smartphone
  };

  return (
    <section id="tech" className="tech-stack-wrapper">
      <div className="tech-stack-container">
        {/* Header Section */}
        <div className="tech-stack-header">
          <div className="tech-stack-badge">
            <Code className="tech-stack-badge-icon" />
            <span>Technologies We Master</span>
          </div>
          <h2 className="tech-stack-title">
            Cutting-Edge Tech Stack
          </h2>
          <p className="tech-stack-subtitle">
            We specialize in the most in-demand technologies across frontend, backend, 
            and mobile development to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="tech-stack-nav">
          {Object.entries(techCategories).map(([key, category]) => {
            const IconComponent = categoryIcons[key];
            return (
              <button
                key={key}
                className={`tech-stack-nav-item ${activeCategory === key ? 'tech-stack-nav-active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <div className="tech-stack-nav-icon">
                  <IconComponent size={20} />
                </div>
                <span className="tech-stack-nav-text">{category.title}</span>
                <ChevronRight className="tech-stack-nav-arrow" size={16} />
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="tech-stack-content">
          <div className="tech-stack-content-header">
            <div className="tech-stack-content-icon">
              {React.createElement(techCategories[activeCategory].icon, { size: 24 })}
            </div>
            <div>
              <h3 className="tech-stack-content-title">
                {techCategories[activeCategory].title}
              </h3>
              <p className="tech-stack-content-desc">
                {techCategories[activeCategory].description}
              </p>
            </div>
          </div>

          <div className="tech-stack-grid">
            {techCategories[activeCategory].technologies.map((tech, index) => (
              <div key={index} className="tech-stack-card">
                <div className="tech-stack-card-header">
                  <div className="tech-stack-logo">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="tech-stack-logo-img"
                    />
                  </div>
                  <div className="tech-stack-card-info">
                    <h4 className="tech-stack-card-title">{tech.name}</h4>
                    <p className="tech-stack-card-desc">{tech.description}</p>
                  </div>
                </div>
                
                <div className="tech-stack-popularity">
                  <div className="tech-stack-popularity-header">
                    <span className="tech-stack-popularity-label">Popularity</span>
                    <span className="tech-stack-popularity-value">{tech.popularity}%</span>
                  </div>
                  <div className="tech-stack-progress-bar">
                    <div 
                      className="tech-stack-progress-fill"
                      style={{ width: `${tech.popularity}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="tech-stack-features">
          <div className="tech-stack-feature">
            <div className="tech-stack-feature-icon">
              <Zap size={20} />
            </div>
            <h4 className="tech-stack-feature-title">High Performance</h4>
            <p className="tech-stack-feature-desc">Optimized solutions for maximum speed and efficiency</p>
          </div>
          <div className="tech-stack-feature">
            <div className="tech-stack-feature-icon">
              <Shield size={20} />
            </div>
            <h4 className="tech-stack-feature-title">Enterprise Security</h4>
            <p className="tech-stack-feature-desc">Industry-standard security practices and protocols</p>
          </div>
          <div className="tech-stack-feature">
            <div className="tech-stack-feature-icon">
              <Layers size={20} />
            </div>
            <h4 className="tech-stack-feature-title">Scalable Architecture</h4>
            <p className="tech-stack-feature-desc">Built to grow with your business needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;