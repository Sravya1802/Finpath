import React, { useState, useEffect } from 'react';
import './BankComparison.css';
import { VisaType, BankOptions } from '../types';

const BankComparison: React.FC = () => {
  const [selectedVisa, setSelectedVisa] = useState<VisaType>('F-1');
  const [selectedBank, setSelectedBank] = useState<number | null>(null);

  const bankOptions: BankOptions = {
    'F-1': [
      {
        name: 'Chase Student Checking',
        features: ['No monthly fee for students', 'No minimum balance', 'Mobile banking', 'Requires: Passport, Visa, I-20'],
        eligibility: 'Excellent for students',
        icon: '🏦'
      },
      {
        name: 'Bank of America Advantage Banking',
        features: ['Student account option', 'No monthly fee with student status', 'Online banking', 'Requires: SSN or ITIN'],
        eligibility: 'Good option',
        icon: '🏛️'
      },
      {
        name: 'Capital One 360',
        features: ['No fees', 'No minimum balance', 'Online-only', 'Requires: SSN or ITIN'],
        eligibility: 'Best for online banking',
        icon: '💻'
      }
    ],
    'H-1B': [
      {
        name: 'Chase Total Checking',
        features: ['No monthly fee with direct deposit', 'Free checks', 'Mobile banking', 'Requires: SSN, Employment letter'],
        eligibility: 'Excellent option',
        icon: '🏦'
      },
      {
        name: 'Ally Bank',
        features: ['No monthly fees', 'High interest rates', 'Online-only', 'Requires: SSN'],
        eligibility: 'Best for savings',
        icon: '💰'
      },
      {
        name: 'Charles Schwab',
        features: ['No fees', 'ATM fee reimbursements', 'Investment options', 'Requires: SSN'],
        eligibility: 'Best for investing',
        icon: '📈'
      }
    ],
    'Refugee': [
      {
        name: 'Local Credit Union',
        features: ['Lower fees', 'Community-focused', 'Multilingual support', 'Requires: SSN, Proof of address'],
        eligibility: 'Best for local support',
        icon: '🤝'
      },
      {
        name: 'Chase Total Checking',
        features: ['No monthly fee with direct deposit', 'Wide branch network', 'Requires: SSN'],
        eligibility: 'Good option',
        icon: '🏦'
      },
      {
        name: 'OneUnited Bank',
        features: ['Community-focused', 'Financial education', 'Requires: SSN'],
        eligibility: 'Best for financial literacy',
        icon: '📚'
      }
    ]
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.visaType) {
      setSelectedVisa(userData.visaType);
    }
  }, []);

  const banks = bankOptions[selectedVisa] || bankOptions['F-1'];

  return (
    <div className="bank-comparison">
      <div className="header">
        <h1>🏦 Compare Banks</h1>
        <p>Select eligible bank options</p>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-title">Select Your Visa Type</div>
          <div className="visa-selector">
            <button
              className={`visa-btn ${selectedVisa === 'F-1' ? 'active' : ''}`}
              onClick={() => setSelectedVisa('F-1')}
            >
              F-1
            </button>
            <button
              className={`visa-btn ${selectedVisa === 'H-1B' ? 'active' : ''}`}
              onClick={() => setSelectedVisa('H-1B')}
            >
              H-1B
            </button>
            <button
              className={`visa-btn ${selectedVisa === 'Refugee' ? 'active' : ''}`}
              onClick={() => setSelectedVisa('Refugee')}
            >
              Refugee
            </button>
          </div>
        </div>

        <div className="banks-list">
          {banks.map((bank, index) => (
            <div
              key={index}
              className={`bank-card ${selectedBank === index ? 'selected' : ''}`}
              onClick={() => setSelectedBank(index)}
            >
              <div className="bank-header">
                <span className="bank-icon">{bank.icon}</span>
                <div>
                  <h3>{bank.name}</h3>
                  <span className="eligibility-badge">{bank.eligibility}</span>
                </div>
              </div>
              <ul className="bank-features">
                {bank.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              {selectedBank === index && (
                <div className="selected-indicator">✓ Selected</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankComparison;

