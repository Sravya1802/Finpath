import React, { useState, useEffect } from 'react';
import './Home.css';
import { VisaType } from '../types';

const Home: React.FC = () => {
  const [selectedVisa, setSelectedVisa] = useState<VisaType>('F-1');
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

  const visaInfo = {
    'F-1': {
      title: 'F-1 Student Visa',
      details: [
        'SSN: Apply with work authorization',
        'Banking: Student accounts available',
        'Credit: Start with secured cards',
        'Taxes: File Form 1040NR'
      ]
    },
    'H-1B': {
      title: 'H-1B Worker Visa',
      details: [
        'SSN: Usually obtained during processing',
        'Banking: Full access to services',
        'Credit: Eligible for all products',
        'Taxes: File Form 1040'
      ]
    },
    'Refugee': {
      title: 'Refugee Status',
      details: [
        'SSN: Apply immediately',
        'Banking: Special programs available',
        'Credit: Start building immediately',
        'Taxes: File Form 1040'
      ]
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const savedVisa = localStorage.getItem('selectedVisa') as VisaType;
    if (userData.visaType) {
      setSelectedVisa(userData.visaType);
    } else if (savedVisa && ['F-1', 'H-1B', 'Refugee'].includes(savedVisa)) {
      setSelectedVisa(savedVisa);
    }
  }, []);

  const info = visaInfo[selectedVisa];

  const faqItems = [
    {
      question: 'What is FinPath and how can it help me?',
      answer: 'FinPath is a financial guidance platform designed specifically for U.S. newcomers including F-1 students, H-1B workers, and refugees. We help you navigate banking, credit building, tax filing, and money transfers with visa-specific guidance and tools.'
    },
    {
      question: 'Do I need a Social Security Number (SSN) to build credit?',
      answer: 'No, you can start building credit without an SSN. You can use an ITIN (Individual Taxpayer Identification Number) or become an authorized user on someone else\'s credit card. However, having an SSN makes it easier to access more financial services and build credit faster.'
    },
    {
      question: 'How do I file taxes as a non-resident?',
      answer: 'F-1 students typically file Form 1040NR or 1040NR-EZ as non-resident aliens. H-1B workers and refugees file Form 1040 as resident aliens. The deadline is usually April 15th. Use our tax information section for visa-specific guidance.'
    },
    {
      question: 'What\'s the best way to send money internationally?',
      answer: 'The best options depend on your needs. Services like Wise and Remitly offer low fees and competitive exchange rates. Western Union has the widest network. Use our Money Transfer section to compare fees, speed, and safety for different services.'
    },
    {
      question: 'Can I open a bank account without an SSN?',
      answer: 'Yes, many banks offer accounts for non-residents. You can use a passport, visa, and I-20 (for students) or other identification documents. Some banks also accept ITINs. Check our bank comparison tool to find options that work for your visa type.'
    }
  ];

  return (
    <div className="home">
      <div className="header">
        <h1>FinPath</h1>
        <p>Financial guidance for U.S. newcomers</p>
      </div>

      <div className="container">
        {/* Visa Selection Section */}
        <div className="card visa-selection-card">
          <div className="visa-header">
            <h2 className="visa-title">Select Your Visa Type</h2>
            <p className="visa-subtitle">Choose your situation</p>
          </div>

          <div className="visa-options">
            <button
              className={`visa-option-card ${selectedVisa === 'F-1' ? 'selected' : ''}`}
              onClick={() => {
                setSelectedVisa('F-1');
                localStorage.setItem('selectedVisa', 'F-1');
              }}
            >
              <div className="visa-option-title">F-1</div>
              <div className="visa-option-subtitle">Student Visa</div>
              <div className="visa-option-desc">For students</div>
            </button>

            <button
              className={`visa-option-card ${selectedVisa === 'H-1B' ? 'selected' : ''}`}
              onClick={() => {
                setSelectedVisa('H-1B');
                localStorage.setItem('selectedVisa', 'H-1B');
              }}
            >
              <div className="visa-option-title">H-1B</div>
              <div className="visa-option-subtitle">Worker Visa</div>
              <div className="visa-option-desc">For workers</div>
            </button>

            <button
              className={`visa-option-card ${selectedVisa === 'Refugee' ? 'selected' : ''}`}
              onClick={() => {
                setSelectedVisa('Refugee');
                localStorage.setItem('selectedVisa', 'Refugee');
              }}
            >
              <div className="visa-option-title">Refugee</div>
              <div className="visa-option-subtitle">Refugee Status</div>
              <div className="visa-option-desc">For refugees</div>
            </button>
          </div>

          {/* Visa Info Display */}
          <div className="visa-info-display">
            <h3 className="visa-info-title">{info.title}</h3>
            <ul className="visa-info-list">
              {info.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="card faq-section-card">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${expandedQ === index ? 'active' : ''}`}
                  onClick={() => setExpandedQ(expandedQ === index ? null : index)}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon">{expandedQ === index ? '▼' : '▶'}</span>
                </button>
                {expandedQ === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
