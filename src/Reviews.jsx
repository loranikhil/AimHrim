import React, { useEffect, useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "./Reviews.css";

const reviewsData = [
  {
    text: "AimHrim helped us find top-notch engineers in record time!",
    name: "Ravi Sharma",
    company: "TechNova",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    text: "The process was smooth, professional, and highly effective.",
    name: "Ananya Patel",
    company: "FinEdge",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    text: "Best staffing partner we’ve ever worked with.",
    name: "Karan Mehta",
    company: "SoftCore Solutions",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    text: "Great communication and amazing candidates delivered.",
    name: "Priya Singh",
    company: "CloudZen",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const SPEED = 0.5; // pixels per frame

const Reviews = () => {
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const animationFrameId = useRef(null);
  const paused = useRef(false);
  const copyWidth = useRef(0);

  // We store offset in a ref for immediate mutation, and useState for render update.
  const offsetRef = useRef(0);
  const [, setRender] = useState(0); // dummy state to trigger re-render

  // Duplicate reviews for seamless infinite scroll
  const looped = [...reviewsData, ...reviewsData];

  // Setup copyWidth once track renders
  useEffect(() => {
    if (!trackRef.current) return;
    copyWidth.current = trackRef.current.scrollWidth / 2;
  }, []);

  // Animation loop for auto-scroll
  useEffect(() => {
    const step = () => {
      if (!paused.current) {
        offsetRef.current -= SPEED;
        if (Math.abs(offsetRef.current) >= copyWidth.current) {
          offsetRef.current += copyWidth.current;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }
      }
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  // Pause/resume handlers
  const pause = () => (paused.current = true);
  const resume = () => (paused.current = false);

  // Scroll by one card width on arrow click
  const scrollByCard = (direction = "right") => {
    if (!trackRef.current || !cardRef.current) return;

    // Get gap (fallback to 24 if invalid)
    const styles = getComputedStyle(trackRef.current);
    const gap = parseFloat(styles.columnGap || styles.gap) || 24;
    const cardWidth = cardRef.current.offsetWidth + gap;

    // Pause auto-scroll temporarily
    pause();
    setTimeout(resume, 2000);

    // Calculate new offset
    let nextOffset =
      direction === "right"
        ? offsetRef.current - cardWidth
        : offsetRef.current + cardWidth;

    // Wrap offset within one copy width to maintain infinite scroll illusion
    if (Math.abs(nextOffset) >= copyWidth.current) {
      nextOffset += copyWidth.current;
    }
    if (nextOffset > 0) {
      nextOffset -= copyWidth.current;
    }

    offsetRef.current = nextOffset;

    // Apply transform immediately
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.4s ease-in-out";
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }

    // Remove transition after animation completes to allow instant updates from auto-scroll
    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = "";
      }
    }, 400);

    // Force a re-render to sync if necessary (optional)
    setRender((r) => r + 1);
  };

  return (
    <section
      className="staffing-testimonial-section"
      aria-label="Client testimonials"
    >
      <div className="staffing-testimonial-container">
        <h2 className="staffing-testimonial-heading">What Our Clients Say</h2>

        <div
          className="staffing-testimonial-slider"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
        >
          <div className="staffing-testimonial-track" ref={trackRef}>
            {looped.map((review, i) => (
              <div
                key={i}
                className="staffing-testimonial-card"
                ref={i === 0 ? cardRef : null}
              >
                <div className="staffing-testimonial-quote-wrapper">
                  <Quote className="staffing-testimonial-quote-icon" />
                </div>
                <p className="staffing-testimonial-text">{review.text}</p>
                <div className="staffing-testimonial-author">
                  <div className="staffing-testimonial-avatar">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="staffing-testimonial-avatar-img"
                    />
                  </div>
                  <h4 className="staffing-testimonial-author-name">{review.name}</h4>
                  <span className="staffing-testimonial-company-name">
                    {review.company}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* arrows */}
          {/* <button
            className="staffing-testimonial-nav staffing-testimonial-nav-prev"
            onClick={() => scrollByCard("left")}
            aria-label="Previous review"
          >
            <ChevronLeft />
          </button>
          <button
            className="staffing-testimonial-nav staffing-testimonial-nav-next"
            onClick={() => scrollByCard("right")}
            aria-label="Next review"
          >
            <ChevronRight />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
