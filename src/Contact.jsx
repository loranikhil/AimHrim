import React from 'react';
import { Phone, Mail, MessageCircle, ArrowRight, Users, Clock, Shield } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleStartConsultation = () => {
    // Add your consultation booking logic here
    console.log('Starting free consultation...');
  };

  const handleCallUs = () => {
    window.open('tel:+1234567890', '_self');
  };

  const handleMailUs = () => {
    window.open('mailto:contact@yourcompany.com?subject=IT Staffing Inquiry', '_self');
  };

  const handleLiveChat = () => {
    // Integrate with your chat service (e.g., Intercom, Zendesk, etc.)
    console.log('Opening live chat...');
    // Example: window.Intercom('show');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Ready to Build Your Dream Team?</h2>
          <p className="contact-subtitle">
            Connect with our IT staffing experts and discover how we can help you find the perfect talent for your projects.
          </p>
        </div>

        {/* Start Free Consultation Button */}
        <div className="consultation-cta">
          <button 
            className="consultation-btn"
            onClick={handleStartConsultation}
          >
            <span>Start Free Consultation</span>
            <ArrowRight className="btn-icon" />
          </button>
          <p className="consultation-note">No commitment • 15-minute call • Expert insights</p>
        </div>

        {/* Contact Methods */}
        <div className="contact-methods">
          <div className="contact-card" onClick={handleCallUs}>
            <div className="contact-icon phone-icon">
              <Phone />
            </div>
            <div className="contact-info">
              <h3>Call Us</h3>
              <p>Speak directly with our staffing specialists</p>
              <span className="contact-detail">+1 (234) 567-8900</span>
              <div className="availability">Available Mon-Fri, 9AM-6PM EST</div>
            </div>
            <ArrowRight className="contact-arrow" />
          </div>

          <div className="contact-card" onClick={handleMailUs}>
            <div className="contact-icon email-icon">
              <Mail />
            </div>
            <div className="contact-info">
              <h3>Email Us</h3>
              <p>Send us your requirements and we'll respond quickly</p>
              <span className="contact-detail">contact@yourcompany.com</span>
              <div className="availability">Response within 2 hours</div>
            </div>
            <ArrowRight className="contact-arrow" />
          </div>

          <div className="contact-card" onClick={handleLiveChat}>
            <div className="contact-icon chat-icon">
              <MessageCircle />
            </div>
            <div className="contact-info">
              <h3>Live Chat</h3>
              <p>Get instant answers from our support team</p>
              <span className="contact-detail">Start chatting now</span>
              <div className="availability">
                <span className="online-indicator"></span>
                Online now
              </div>
            </div>
            <ArrowRight className="contact-arrow" />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <Users className="trust-icon" />
            <span>3699+ Successful Placements</span>
          </div>
          <div className="trust-item">
            <Clock className="trust-icon" />
            <span>24/7 Support Available</span>
          </div>
          <div className="trust-item">
            <Shield className="trust-icon" />
            <span>100% Confidential Process</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;