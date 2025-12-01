import React, { useState, useEffect } from 'react';
import './TaxInfo.css';
import { VisaType, TaxInfo as TaxInfoType } from '../types';

const TaxInfo: React.FC = () => {
  const [selectedVisa, setSelectedVisa] = useState<VisaType>('F-1');

  const taxInfo: Record<VisaType, TaxInfoType> = {
    'F-1': {
      form: '1040NR or 1040NR-EZ',
      status: 'Non-resident alien',
      deadline: 'April 15th',
      requirements: [
        'File if you have U.S. income',
        'Use Form 1040NR for non-resident status',
        'May need to file state taxes too',
        'Keep all W-2 and 1099 forms'
      ],
      tips: [
        'File even if income is below threshold',
        'Claim tax treaty benefits if applicable',
        'Use tax software or professional help',
        'Keep records for at least 3 years'
      ]
    },
    'H-1B': {
      form: '1040',
      status: 'Resident alien',
      deadline: 'April 15th',
      requirements: [
        'File Form 1040 as resident alien',
        'Subject to all U.S. taxes',
        'Can claim standard deduction',
        'May need to file state taxes'
      ],
      tips: [
        'Maximize 401(k) contributions',
        'Consider itemizing deductions',
        'File for tax credits you qualify for',
        'Keep all receipts and documents'
      ]
    },
    'Refugee': {
      form: '1040',
      status: 'Resident alien',
      deadline: 'April 15th',
      requirements: [
        'File Form 1040 as resident alien',
        'May be eligible for tax credits',
        'Earned Income Tax Credit (EITC) may apply',
        'File state taxes if required'
      ],
      tips: [
        'Check eligibility for tax credits',
        'Use free tax preparation services',
        'Keep all income documentation',
        'Seek help from community organizations'
      ]
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.visaType) {
      setSelectedVisa(userData.visaType);
    }
  }, []);

  const info = taxInfo[selectedVisa] || taxInfo['F-1'];

  return (
    <div className="tax-info">
      <div className="header">
        <h1>📅 Tax Information</h1>
        <p>Tax filing guide for your visa type</p>
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

        <div className="card">
          <div className="card-title">Tax Filing Information</div>
          <div className="tax-details">
            <div className="tax-item">
              <span className="tax-label">Form to File:</span>
              <span className="tax-value">{info.form}</span>
            </div>
            <div className="tax-item">
              <span className="tax-label">Tax Status:</span>
              <span className="tax-value">{info.status}</span>
            </div>
            <div className="tax-item">
              <span className="tax-label">Filing Deadline:</span>
              <span className="tax-value deadline">{info.deadline}</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Requirements</div>
          <ul className="info-list">
            {info.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="card-title">💡 Tips</div>
          <ul className="info-list">
            {info.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaxInfo;

