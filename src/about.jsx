import React from 'react';
import { 
  Lightbulb, 
  Search, 
  TrendingUp, 
  DollarSign, 
  Handshake, 
  Users 
} from 'lucide-react';
import './About.css';

const About = () => {
  const topSteps = [
    {
      id: 1,
      icon: <Lightbulb className="roadmap-step__icon" />,
      title: "DISCOVERY",
      description: "We understand your business goals, project requirements, and the exact skill sets you need."
    },
    {
      id: 2,
      icon: <Search className="roadmap-step__icon" />,
      title: "SOURCING",
      description: "Our team identifies top software talent through  advanced recruitment tools."
    },
    {
      id: 3,
      icon: <TrendingUp className="roadmap-step__icon" />,
      title: "SCREENING",
      description: "We carefully assess technical expertise, problem-solving skills for your team."
    }
  ];

  const bottomSteps = [
    {
      id: 4,
      icon: <DollarSign className="roadmap-step__icon" />,
      title: "NEGOTIATION",
      description: "We align expectations, manage compensation discussions, and ensure transparency for all parties."
    },
    {
      id: 5,
      icon: <Handshake className="roadmap-step__icon" />,
      title: "PLACEMENT",
      description: "Selected candidates are seamlessly onboarded to your team, ready to drive project success."
    },
    {
      id: 6,
      icon: <Users className="roadmap-step__icon" />,
      title: "SUPPORT",
      description: "We provide ongoing support to ensure long-term retention, satisfaction, and performance."
    }
  ];

  return (
    <div className="staffing-about-container">
      <div className="staffing-about__header">
        <h2 className="staffing-about__title">Our Staffing Roadmap Process</h2>
        <p className="staffing-about__subtitle">
          Follow our systematic approach to successful talent acquisition and placement
        </p>
      </div>

      <div className="roadmap-container">
        {/* Background curved path */}
        <div className="roadmap-path">
          <svg className="roadmap-svg" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            <path
              d="M 80 200 Q 150 100 250 150 Q 350 100 450 150 Q 550 100 650 150 Q 750 200 850 150 Q 900 200 920 250 Q 900 300 850 250 Q 800 200 750 250 Q 650 300 550 250 Q 450 300 350 250 Q 250 300 150 250 Q 80 200 80 200"
              stroke="#cbd5e1"
              strokeWidth="6"
              fill="none"
              className="roadmap-background-path"
            />
            <path
              d="M 80 200 Q 150 100 250 150 Q 350 100 450 150 Q 550 100 650 150 Q 750 200 850 150 Q 900 200 920 250 Q 900 300 850 250 Q 800 200 750 250 Q 650 300 550 250 Q 450 300 350 250 Q 250 300 150 250 Q 80 200 80 200"
              stroke="#6366f1"
              strokeWidth="3"
              fill="none"
              strokeDasharray="8 6"
              className="roadmap-animated-path"
            />
          </svg>
        </div>

        {/* Roadmap Text */}
        <div className="roadmap-text">
          <span>ROADMAP</span>
          {/* <span className="roadmap-subtext">NEW PROJECT</span> */}
        </div>

        {/* Start Circle */}
        <div className="roadmap-start">
          <div className="roadmap-start__circle">
            START
          </div>
        </div>

        {/* Top Row Steps */}
        <div className="roadmap-steps-top">
          {topSteps.map((step, index) => (
            <div key={step.id} className="roadmap-step-wrapper">
              <div className="roadmap-step">
                <div className="roadmap-step__circle">
                  {step.icon}
                </div>
                <div className="roadmap-step__content">
                  <h3 className="roadmap-step__title">{step.title}</h3>
                  <p className="roadmap-step__description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row Steps */}
        <div className="roadmap-steps-bottom">
          {bottomSteps.map((step, index) => (
            <div key={step.id} className="roadmap-step-wrapper">
              <div className="roadmap-step">
                <div className="roadmap-step__circle">
                  {step.icon}
                </div>
                <div className="roadmap-step__content">
                  <h3 className="roadmap-step__title">{step.title}</h3>
                  <p className="roadmap-step__description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Finish Circle */}
        <div className="roadmap-finish">
          <div className="roadmap-finish__circle">
            FINISH
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="staffing-about__cta">
        <h3 className="staffing-cta__title">Ready to Transform Your Hiring?</h3>
        <p className="staffing-cta__description">
          Start your journey with our proven staffing process today
        </p>
        <div className="staffing-cta__buttons">
          <button className="staffing-btn staffing-btn--primary">Begin Process</button>
          <button className="staffing-btn staffing-btn--secondary">Learn More</button>
        </div>
      </div> */}
    </div>
  );
};

export default About;
