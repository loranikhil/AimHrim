import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const autoSlideRef = useRef();
  const trackRef = useRef();

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, trustedCompanies.length - itemsPerView);

  const nextSlide = () => {
    if (isDragging) return;
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 500);
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    if (isDragging) return;
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 500);
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (isDragging) {
      autoSlideRef.current && clearInterval(autoSlideRef.current);
      return;
    }

    autoSlideRef.current && clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => setIsSliding(false), 500);
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 4000);

    return () => clearInterval(autoSlideRef.current);
  }, [maxIndex, itemsPerView, isDragging]);

  // Enhanced touch and mouse drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setCurrentX(clientX);
    
    // Prevent text selection during drag
    if (e.type === 'mousedown') {
      e.preventDefault();
      document.body.style.userSelect = 'none';
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault(); // Prevent default scrolling behavior
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    setCurrentX(clientX);
    const diff = clientX - startX;
    
    // Add some resistance at the boundaries
    let adjustedDiff = diff;
    if (currentIndex === 0 && diff > 0) {
      adjustedDiff = diff * 0.3; // Resistance when at the beginning
    } else if (currentIndex === maxIndex && diff < 0) {
      adjustedDiff = diff * 0.3; // Resistance when at the end
    }
    
    setDragOffset(adjustedDiff);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const diff = currentX - startX;
    const threshold = isMobile ? 30 : 50; // Lower threshold for mobile
    
    // Re-enable text selection
    document.body.style.userSelect = '';
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex > 0) {
        // Swiped right, go to previous
        setIsSliding(true);
        setTimeout(() => setIsSliding(false), 500);
        setCurrentIndex(prev => prev - 1);
      } else if (diff < 0 && currentIndex < maxIndex) {
        // Swiped left, go to next
        setIsSliding(true);
        setTimeout(() => setIsSliding(false), 500);
        setCurrentIndex(prev => prev + 1);
      }
    }
    
    // Reset drag state
    setDragOffset(0);
    setStartX(0);
    setCurrentX(0);
  };

  // Global event listeners for mouse events
  useEffect(() => {
    const handleMouseMove = (e) => handleDragMove(e);
    const handleMouseUp = (e) => handleDragEnd(e);
    
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: false });
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startX, currentX, currentIndex, maxIndex]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`modern-star ${index < Math.floor(rating) ? 'modern-star-filled' : 'modern-star-empty'}`}
        size={16}
        fill={index < Math.floor(rating) ? '#fbbf24' : 'none'}
      />
    ));
  };

  const getTransformValue = () => {
    const baseTransform = -currentIndex * (100 / itemsPerView);
    if (isDragging && trackRef.current) {
      const dragPercentage = (dragOffset / trackRef.current.offsetWidth) * 100;
      return baseTransform + dragPercentage;
    }
    return baseTransform;
  };

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
          <div className="modern-carousel-container">
            <button 
              className="modern-nav-btn modern-nav-prev" 
              onClick={prevSlide}
              aria-label="Previous reviews"
              style={{display: isMobile ? 'none' : 'flex'}}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="modern-carousel-viewport">
              <div 
                ref={trackRef}
                className={`modern-carousel-track${isSliding ? ' sliding' : ''}${isDragging ? ' dragging' : ''}`}
                style={{
                  transform: `translateX(${getTransformValue()}%)`,
                  transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {trustedCompanies.map((company) => (
                  <div key={company.id} className="modern-review-card">
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

            <button 
              className="modern-nav-btn modern-nav-next" 
              onClick={nextSlide}
              aria-label="Next reviews"
              style={{display: isMobile ? 'none' : 'flex'}}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* <div className="modern-indicators">
            {Array.from({ length: Math.ceil(trustedCompanies.length / itemsPerView) }, (_, index) => (
              <button
                key={index}
                className={`modern-indicator ${Math.floor(currentIndex / itemsPerView) === index ? 'modern-indicator-active' : ''}`}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;