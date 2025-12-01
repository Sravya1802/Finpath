import React, { useState } from 'react';
import './SafeSpending.css';
import { SafeSpendingResult } from '../types';

const SafeSpending: React.FC = () => {
  const [creditLimit, setCreditLimit] = useState<string>('');
  const [currentBalance, setCurrentBalance] = useState<string>('');
  const [result, setResult] = useState<SafeSpendingResult | null>(null);

  const calculateSafeSpending = (): void => {
    const limit = parseFloat(creditLimit);
    const balance = parseFloat(currentBalance) || 0;

    if (!limit || limit <= 0) {
      setResult(null);
      return;
    }

    const safeUtilization = 0.30;
    const maxSafeBalance = limit * safeUtilization;
    const safeSpending = maxSafeBalance - balance;
    const currentUtilization = (balance / limit * 100).toFixed(1);

    let status = '';
    let statusColor = '';
    if (parseFloat(currentUtilization) < 30) {
      status = '✓ Good';
      statusColor = '#2ecc71';
    } else if (parseFloat(currentUtilization) < 50) {
      status = '⚠ Getting high';
      statusColor = '#f39c12';
    } else {
      status = '✗ Too high';
      statusColor = '#e74c3c';
    }

    setResult({
      currentUtilization,
      safeSpending: Math.max(0, safeSpending),
      maxSafeBalance,
      status,
      statusColor
    });
  };

  return (
    <div className="safe-spending">
      <div className="header">
        <h1>💳 Safe Spending</h1>
        <p>Calculate safe credit card spending limit</p>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-title">Credit Card Information</div>
          
          <div className="input-group">
            <label>Credit Card Limit ($)</label>
            <input
              type="number"
              placeholder="Type here the limit"
              value={creditLimit}
              onChange={(e) => {
                setCreditLimit(e.target.value);
                setResult(null);
              }}
              onBlur={calculateSafeSpending}
            />
          </div>

          <div className="input-group">
            <label>Current Balance ($)</label>
            <input
              type="number"
              placeholder="Type here the balance"
              value={currentBalance}
              onChange={(e) => {
                setCurrentBalance(e.target.value);
                setResult(null);
              }}
              onBlur={calculateSafeSpending}
            />
          </div>

          {result && (
            <div className="result-box" style={{ borderColor: result.statusColor }}>
              <div className="result-item">
                <strong>Current Utilization:</strong>
                <span style={{ color: result.statusColor, fontWeight: 700 }}>
                  {result.currentUtilization}% {result.status}
                </span>
              </div>
              <div className="result-item">
                <strong>Safe Spending Limit:</strong>
                <span style={{ color: '#3498db', fontWeight: 700 }}>
                  ${result.safeSpending.toFixed(2)}
                </span>
              </div>
              <div className="result-item">
                <strong>Max Safe Balance:</strong>
                <span>${result.maxSafeBalance.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>

        <div className="info-card">
          <div className="card-title">💡 Tips</div>
          <ul>
            <li>Keep credit utilization below 30%</li>
            <li>Pay off balances monthly when possible</li>
            <li>Monitor your credit score regularly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SafeSpending;

