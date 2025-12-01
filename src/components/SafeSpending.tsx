import React, { useState, useEffect } from 'react';
import './SafeSpending.css';
import { SafeSpendingResult } from '../types';

const SafeSpending: React.FC = () => {
  const [creditLimit, setCreditLimit] = useState<string>('');
  const [currentBalance, setCurrentBalance] = useState<string>('');
  const [result, setResult] = useState<SafeSpendingResult | null>(null);
  
  // Monthly Payment Calculator state
  const [cardBalance, setCardBalance] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

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
    if (parseFloat(currentUtilization) < 30) {
      status = 'Good';
    } else if (parseFloat(currentUtilization) < 50) {
      status = 'Getting high';
    } else {
      status = 'Too high';
    }

    setResult({
      currentUtilization,
      safeSpending: Math.max(0, safeSpending),
      maxSafeBalance,
      status,
      statusColor: '#000000'
    });
  };

  const calculateMonthlyPayment = (): void => {
    const balance = parseFloat(cardBalance);
    const rate = parseFloat(interestRate);

    if (!balance || balance <= 0 || !rate || rate <= 0) {
      setMonthlyPayment(null);
      return;
    }

    // Calculate monthly payment using simple interest formula
    // Monthly payment = (Balance * (Rate/12/100)) / (1 - (1 + Rate/12/100)^(-12))
    // For simplicity, using minimum payment calculation: 2% of balance + interest
    const monthlyRate = rate / 12 / 100;
    const minPaymentPercent = 0.02; // 2% minimum payment
    const minPayment = balance * minPaymentPercent;
    const interestPayment = balance * monthlyRate;
    const totalMonthlyPayment = minPayment + interestPayment;

    setMonthlyPayment(totalMonthlyPayment);
  };

  return (
    <div className="safe-spending">
      <div className="header">
        <h1>Safe Spending</h1>
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
                const newLimit = e.target.value;
                setCreditLimit(newLimit);
                // Recalculate with new limit
                const balance = parseFloat(currentBalance) || 0;
                const limit = parseFloat(newLimit);
                if (limit > 0) {
                  const safeUtilization = 0.30;
                  const maxSafeBalance = limit * safeUtilization;
                  const safeSpending = maxSafeBalance - balance;
                  const currentUtilization = (balance / limit * 100).toFixed(1);
                  let status = '';
                  if (parseFloat(currentUtilization) < 30) {
                    status = 'Good';
                  } else if (parseFloat(currentUtilization) < 50) {
                    status = 'Getting high';
                  } else {
                    status = 'Too high';
                  }
                  setResult({
                    currentUtilization,
                    safeSpending: Math.max(0, safeSpending),
                    maxSafeBalance,
                    status,
                    statusColor: '#000000'
                  });
                } else {
                  setResult(null);
                }
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
                const newBalance = e.target.value;
                setCurrentBalance(newBalance);
                // Recalculate with new balance
                const limit = parseFloat(creditLimit);
                const balance = parseFloat(newBalance) || 0;
                if (limit > 0) {
                  const safeUtilization = 0.30;
                  const maxSafeBalance = limit * safeUtilization;
                  const safeSpending = maxSafeBalance - balance;
                  const currentUtilization = (balance / limit * 100).toFixed(1);
                  let status = '';
                  if (parseFloat(currentUtilization) < 30) {
                    status = 'Good';
                  } else if (parseFloat(currentUtilization) < 50) {
                    status = 'Getting high';
                  } else {
                    status = 'Too high';
                  }
                  setResult({
                    currentUtilization,
                    safeSpending: Math.max(0, safeSpending),
                    maxSafeBalance,
                    status,
                    statusColor: '#000000'
                  });
                } else {
                  setResult(null);
                }
              }}
              onBlur={calculateSafeSpending}
            />
          </div>

          <div className="input-group result-row">
            <label>Current Utilization:</label>
            <span style={{ fontWeight: 700 }}>
              {result ? `${result.currentUtilization}% ${result.status}` : '-'}
            </span>
          </div>

          <div className="input-group result-row">
            <label>Safe Spending Limit:</label>
            <span style={{ fontWeight: 700 }}>
              {result ? `$${result.safeSpending.toFixed(2)}` : '-'}
            </span>
          </div>

          <div className="input-group result-row">
            <label>Max Safe Balance:</label>
            <span>
              {result ? `$${result.maxSafeBalance.toFixed(2)}` : '-'}
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Monthly Payment Calculator</div>
          
          <div className="input-group">
            <label>Credit Card Balance ($)</label>
            <input
              type="number"
              placeholder="Enter balance"
              value={cardBalance}
              onChange={(e) => {
                const newBalance = e.target.value;
                setCardBalance(newBalance);
                const balance = parseFloat(newBalance);
                const rate = parseFloat(interestRate);
                if (balance > 0 && rate > 0) {
                  const monthlyRate = rate / 12 / 100;
                  const minPaymentPercent = 0.02;
                  const minPayment = balance * minPaymentPercent;
                  const interestPayment = balance * monthlyRate;
                  const totalMonthlyPayment = minPayment + interestPayment;
                  setMonthlyPayment(totalMonthlyPayment);
                } else {
                  setMonthlyPayment(null);
                }
              }}
              onBlur={calculateMonthlyPayment}
            />
          </div>

          <div className="input-group">
            <label>Annual Interest Rate (%)</label>
            <input
              type="number"
              step="0.01"
              placeholder="e.g., 18.99"
              value={interestRate}
              onChange={(e) => {
                const newRate = e.target.value;
                setInterestRate(newRate);
                const balance = parseFloat(cardBalance);
                const rate = parseFloat(newRate);
                if (balance > 0 && rate > 0) {
                  const monthlyRate = rate / 12 / 100;
                  const minPaymentPercent = 0.02;
                  const minPayment = balance * minPaymentPercent;
                  const interestPayment = balance * monthlyRate;
                  const totalMonthlyPayment = minPayment + interestPayment;
                  setMonthlyPayment(totalMonthlyPayment);
                } else {
                  setMonthlyPayment(null);
                }
              }}
              onBlur={calculateMonthlyPayment}
            />
          </div>

          <div className="input-group result-row">
            <label>Estimated Monthly Payment:</label>
            <span style={{ fontWeight: 700 }}>
              {monthlyPayment !== null && monthlyPayment > 0 ? `$${monthlyPayment.toFixed(2)}` : '-'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSpending;

