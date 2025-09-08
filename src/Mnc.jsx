import React from 'react';
import './Mnc.css';

const MNC = () => {
  // Top MNC companies with their logos (using high-quality logo URLs)
  const mncCompanies = [
    {
      id: 1,
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      alt: 'Apple Inc. Logo'
    },
    {
      id: 2,
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
      alt: 'Microsoft Corporation Logo'
    },
    {
      id: 3,
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      alt: 'Google LLC Logo'
    },
    {
      id: 4,
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      alt: 'Amazon.com Inc. Logo'
    },
    {
      id: 5,
      name: 'Meta',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
      alt: 'Meta Platforms Inc. Logo'
    },
    {
      id: 6,
      name: 'Tesla',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
      alt: 'Tesla Inc. Logo'
    },
    {
      id: 7,
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      alt: 'Netflix Inc. Logo'
    },
    {
      id: 8,
      name: 'Intel',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg',
      alt: 'Intel Corporation Logo'
    },
    {
      id: 9,
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      alt: 'IBM Corporation Logo'
    },
    {
      id: 10,
      name: 'Oracle',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
      alt: 'Oracle Corporation Logo'
    },
    {
      id: 11,
      name: 'Salesforce',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
      alt: 'Salesforce Inc. Logo'
    },
    
  ];

  // Duplicate the array for seamless infinite scrolling
  const duplicatedCompanies = [...mncCompanies, ...mncCompanies];

  return (
    <div className="mnc-trusted-companies-section">
      <div className="mnc-container">
        <div className="mnc-section-header">
          <h2 className="mnc-title">Trusted by Leading Companies</h2>
          <p className="mnc-subtitle">Join the world's most innovative organizations</p>
        </div>
        
        <div className="mnc-slider-wrapper">
          <div className="mnc-slider-track">
            {duplicatedCompanies.map((company, index) => (
              <div 
                key={`${company.id}-${index}`} 
                className="mnc-company-card"
              >
                <img 
                  src={company.logo} 
                  alt={company.alt}
                  className="mnc-company-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MNC;