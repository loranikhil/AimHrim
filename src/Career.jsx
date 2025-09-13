import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Mail,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react';
import './Career.css';

const Career = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobListings = [
    {
      id: 1,
      title: 'Senior Inventory Specialist',
      type: 'Full Time',
      salary: '$50K - $60K',
      location: 'Boston, United States',
      category: 'Operations'
    },
    {
      id: 2,
      title: 'Senior Software Developer',
      type: 'Full Time',
      salary: '$80K - $120K',
      location: 'Boston, United States',
      category: 'Engineering'
    },
    {
      id: 3,
      title: 'Junior UI/UX Fullstack Designer',
      type: 'Full Time',
      salary: '$50K - $70K',
      location: 'Boston, United States',
      category: 'Design'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      type: 'Full Time',
      salary: '$90K - $130K',
      location: 'Remote, United States',
      category: 'Engineering'
    },
    {
      id: 5,
      title: 'Product Manager',
      type: 'Full Time',
      salary: '$95K - $140K',
      location: 'Boston, United States',
      category: 'Product'
    },
    {
      id: 6,
      title: 'Data Scientist',
      type: 'Full Time',
      salary: '$85K - $125K',
      location: 'Remote, United States',
      category: 'Data'
    },
    {
      id: 7,
      title: 'QA Engineer',
      type: 'Full Time',
      salary: '$60K - $85K',
      location: 'Boston, United States',
      category: 'Engineering'
    },
    {
      id: 8,
      title: 'Sales Representative',
      type: 'Full Time',
      salary: '$45K - $65K + Commission',
      location: 'Boston, United States',
      category: 'Sales'
    }
  ];

  const toggleExpanded = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="career-container">
      {/* === Back to Home Button Start === */}
      <div className="back-to-home-container">
        <button
          className="back-to-home-btn"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="back-icon" />
          <span>Back to Home</span>
        </button>
      </div>
      {/* === Back to Home Button End === */}

      <div className="career-content">
        <div className="career-sidebar">
          <h1 className="career-title">Our Open Roles</h1>
          <div className="contact-info">
            <p className="contact-label">OR CONTACT US WITH</p>
            <a href="mailto:hello@aimhrim.com" className="contact-email">
              <Mail size={16} />
              hello@aimhrim.com
            </a>
          </div>
        </div>

        <div className="career-main">
          <div className="job-listings">
            {jobListings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header" onClick={() => toggleExpanded(job.id)}>
                  <div className="job-info">
                    <span className="job-category">OPEN ROLES</span>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-details">
                      <span className="job-detail">
                        <Clock size={14} />
                        {job.type}
                      </span>
                      <span className="job-detail">
                        <DollarSign size={14} />
                        {job.salary}
                      </span>
                      <span className="job-detail">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="job-actions">
                    <a
                      className="apply-btn"
                      href="https://forms.gle/YOUR_GOOGLE_FORM_ID" // Replace this with your actual form link
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Submit Application
                      <ArrowRight size={16} />
                    </a>
                    <button className="expand-btn">
                      {expandedJob === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div className="job-description">
                    <div className="job-desc-content">
                      <h4>Job Description</h4>
                      <p>
                        We are looking for a talented {job.title} to join our dynamic team.
                        This role offers an excellent opportunity to work with cutting-edge
                        technologies and contribute to innovative projects that make a real impact.
                      </p>
                      <h4>Requirements</h4>
                      <ul>
                        <li>3+ years of relevant experience</li>
                        <li>Strong problem-solving skills</li>
                        <li>Excellent communication abilities</li>
                        <li>Bachelor's degree or equivalent experience</li>
                      </ul>
                      <h4>Benefits</h4>
                      <ul>
                        <li>Competitive salary and benefits</li>
                        <li>Flexible work arrangements</li>
                        <li>Professional development opportunities</li>
                        <li>Health, dental, and vision insurance</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="company-info">
            <div className="info-section">
              <h3>How It Works</h3>
              <p>
                By integrating advanced artificial intelligence with
                cutting-edge technology, we provide innovative
                solutions to unlock the full potential of software development.
              </p>
            </div>
            <div className="info-section">
              <h3>Contact Us</h3>
              <p>
                Precision talent matching meets AI-driven insights to
                unlock the future of software staffing, technology, and
                beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
