import React, { useState, useEffect } from 'react';
import './CriticalAlerts.css';
import { VisaType, AlertsData } from '../types';

const CriticalAlerts: React.FC = () => {
  const [selectedVisa, setSelectedVisa] = useState<VisaType>('F-1');

  const alertsData: Record<VisaType, AlertsData> = {
    'F-1': {
      critical: [
        {
          title: 'Tax Filing Deadline Approaching',
          message: 'File Form 1040NR by April 15th if you have U.S. income',
          date: 'Due in 45 days',
          icon: '[!]',
          priority: 'high'
        },
        {
          title: 'OPT Application Window',
          message: 'Apply for Optional Practical Training 90 days before program end',
          date: 'Check your program end date',
          icon: '[D]',
          priority: 'medium'
        }
      ],
      regular: [
        {
          title: 'Credit Report Check',
          message: 'Review your credit report at annualcreditreport.com',
          date: 'Monthly reminder',
          icon: '[R]',
          priority: 'low'
        }
      ]
    },
    'H-1B': {
      critical: [
        {
          title: 'Tax Filing Deadline Approaching',
          message: 'File Form 1040 by April 15th',
          date: 'Due in 45 days',
          icon: '[!]',
          priority: 'high'
        },
        {
          title: '401(k) Contribution Deadline',
          message: 'Maximize your 401(k) contributions before December 31st',
          date: 'Due in 30 days',
          icon: '[K]',
          priority: 'high'
        }
      ],
      regular: [
        {
          title: 'H-1B Extension Review',
          message: 'Check your visa expiration date',
          date: 'Quarterly reminder',
          icon: '[E]',
          priority: 'medium'
        }
      ]
    },
    'Refugee': {
      critical: [
        {
          title: 'SSN Application Urgent',
          message: 'Apply for Social Security Number immediately if you haven\'t already',
          date: 'Urgent',
          icon: '[!]',
          priority: 'high'
        },
        {
          title: 'Tax Filing Deadline',
          message: 'File Form 1040 by April 15th',
          date: 'Due in 45 days',
          icon: '[T]',
          priority: 'high'
        }
      ],
      regular: [
        {
          title: 'Benefits Application Review',
          message: 'Check eligibility for government benefits',
          date: 'Monthly reminder',
          icon: '[B]',
          priority: 'medium'
        }
      ]
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.visaType) {
      setSelectedVisa(userData.visaType);
    }
  }, []);

  const alerts = alertsData[selectedVisa] || alertsData['F-1'];

  return (
    <div className="critical-alerts">
      <div className="header">
        <h1>Critical Alerts</h1>
        <p>Upcoming deadlines and reminders</p>
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

        <div className="alerts-section">
          <h2 className="section-title">Critical Alerts</h2>
          {alerts.critical.map((alert, index) => (
            <div key={index} className={`alert-card critical`}>
              <div className="alert-header">
                <span className="alert-icon">{alert.icon}</span>
                <div className="alert-content">
                  <h3>{alert.title}</h3>
                  <p>{alert.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alerts-section">
          <h2 className="section-title">Regular Reminders</h2>
          {alerts.regular.map((alert, index) => (
            <div key={index} className="alert-card regular">
              <div className="alert-header">
                <span className="alert-icon">{alert.icon}</span>
                <div className="alert-content">
                  <h3>{alert.title}</h3>
                  <p>{alert.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CriticalAlerts;

