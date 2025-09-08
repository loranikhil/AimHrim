import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragStartTranslate, setDragStartTranslate] = useState(0);
  const animationRef = useRef();
  const trackRef = useRef();
  const containerRef = useRef();

  const trustedCompanies = [
    {
      id: 1,
      name: "TechFlow Solutions",
      logo: "TF",
      rating: 4.8,
      reviewText: "Outstanding service! They helped us find skilled developers quickly. Their screening process is thorough and the candidates exceeded our expectations.",
      reviewer: "Sarah Chen",
      position: "CTO",
      company: "StartupTech Inc",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "DevStaff Pro",
      logo: "DS",
      rating: 4.9,
      reviewText: "Best IT staffing agency we've worked with. They understand our technical requirements and deliver quality talent consistently.",
      reviewer: "Michael Rodriguez",
      position: "Engineering Manager",
      company: "CloudCorp",
      color: "#10b981"
    },
    {
      id: 3,
      name: "CodeCraft Staffing",
      logo: "CC",
      rating: 4.7,
      reviewText: "Professional team with deep understanding of tech roles. They matched us with perfect candidates for our React and Node.js positions.",
      reviewer: "Emily Watson",
      position: "HR Director",
      company: "TechVenture Ltd",
      color: "#8b5cf6"
    },
    {
      id: 4,
      name: "TalentBridge IT",
      logo: "TB",
      rating: 4.8,
      reviewText: "Excellent communication and fast turnaround. They provided skilled full-stack developers who integrated seamlessly into our team.",
      reviewer: "David Park",
      position: "Product Manager",
      company: "InnovateLabs",
      color: "#f59e0b"
    },
    {
      id: 5,
      name: "NextGen Staffing",
      logo: "NG",
      rating: 4.6,
      reviewText: "Great experience! They understood our company culture and found developers who fit perfectly both technically and culturally.",
      reviewer: "Jessica Liu",
      position: "VP of Engineering",
      company: "DataFlow Systems",
      color: "#ef4444"
    },
    {
      id: 6,
      name: "EliteCode Partners",
      logo: "EC",
      rating: 4.9,
      reviewText: "Top-notch service with exceptional attention to detail. Their candidates are pre-vetted and ready to contribute from day one.",
      reviewer: "Robert Kumar",
      position: "Technical Lead",
      company: "ScaleUp Tech",
      color: "#06b6d4"
    }
  ];

  // Create seamless loop by duplicating items
  const extendedCompanies = [...trustedCompanies, ...trustedCompanies, ...trustedCompanies];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Continuous animation
  useEffect(() => {
    if (isHovered || isDragging) return;

    const animate = () => {
      setCurrentTranslate(prev => {
        const speed = isMobile ? 0.5 : 0.3;
        const newTranslate = prev - speed;
        
        // Reset when we've moved one full set
        const cardWidth = isMobile ? 300 : 400;
        const gap = isMobile ? 16 : 32;
        const itemWidth = cardWidth + gap;
        const resetPoint = -(trustedCompanies.length * itemWidth);
        
        if (newTranslate <= resetPoint) {
          return 0;
        }
        
        return newTranslate;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, isDragging, isMobile, trustedCompanies.length]);

  // Manual navigation
  const moveSlide = (direction) => {
    const cardWidth = isMobile ? 300 : 400;
    const gap = isMobile ? 16 : 32;
    const itemWidth = cardWidth + gap;
    
    setCurrentTranslate(prev => {
      const newTranslate = prev + (direction * itemWidth);
      const resetPoint = -(trustedCompanies.length * itemWidth);
      const maxPoint = itemWidth;
      
      if (newTranslate <= resetPoint) {
        return 0;
      } else if (newTranslate >= maxPoint) {
        return resetPoint + itemWidth;
      }
      
      return newTranslate;
    });
  };

  // Drag functionality
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragStartTranslate(currentTranslate);
    
    if (e.type === 'mousedown') {
      e.preventDefault();
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    const newTranslate = dragStartTranslate + diff;
    
    setCurrentTranslate(newTranslate);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  // Mouse event listeners
  useEffect(() => {
    const handleMouseMove = (e) => handleDragMove(e);
    const handleMouseUp = () => handleDragEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX, dragStartTranslate]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`modern-star ${index < Math.floor(rating) ? 'modern-star-filled' : 'modern-star-empty'}`}
        size={16}
        fill={index < Math.floor(rating) ? '#fbbf24' : 'none'}
      />
    ));

  return (
    <div className="modern-reviews-section">
      <div className="modern-reviews-container">
        <div className="modern-reviews-header">
          <div className="modern-header-badge">
            <Building2 size={20} />
            <span>Trusted Partners</span>
          </div>
          <h2 className="modern-reviews-title">What Our Clients Say</h2>
          <p className="modern-reviews-subtitle">
            Leading tech companies trust us with their staffing needs
          </p>
        </div>

        <div className="modern-carousel-section">
          <div 
            className="modern-carousel-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!isMobile && (
              <button
                className="modern-nav-btn modern-nav-prev"
                onClick={() => moveSlide(1)}
                aria-label="Previous reviews"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <div 
              ref={containerRef}
              className="modern-carousel-viewport"
            >
              <div
                ref={trackRef}
                className="modern-carousel-track"
                style={{
                  transform: `translateX(${currentTranslate}px)`,
                  transition: isDragging ? 'none' : 'none', // Always smooth via requestAnimationFrame
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {extendedCompanies.map((company, idx) => (
                  <div 
                    key={`${company.id}-${idx}`} 
                    className="modern-review-card"
                    style={{
                      flexShrink: 0,
                      width: isMobile ? '300px' : '400px',
                      marginRight: isMobile ? '16px' : '32px'
                    }}
                  >
                    <div className="modern-card-header">
                      <Quote className="modern-quote-icon" size={24} />
                      <div className="modern-rating-section">
                        <div className="modern-stars">
                          {renderStars(company.rating)}
                        </div>
                        <span className="modern-rating-number">{company.rating}</span>
                      </div>
                    </div>

                    <div className="modern-card-content">
                      <p className="modern-review-text">{company.reviewText}</p>
                    </div>

                    <div className="modern-card-footer">
                      <div
                        className="modern-company-avatar"
                        style={{ backgroundColor: company.color }}
                      >
                        {company.logo}
                      </div>
                      <div className="modern-company-info">
                        <h4 className="modern-company-name">{company.name}</h4>
                        <div className="modern-reviewer-info">
                          <span className="modern-reviewer-name">{company.reviewer}</span>
                          <span className="modern-reviewer-title">
                            {company.position}, {company.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {!isMobile && (
              <button
                className="modern-nav-btn modern-nav-next"
                onClick={() => moveSlide(-1)}
                aria-label="Next reviews"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;