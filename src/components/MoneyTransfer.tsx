import React, { useState } from 'react';
import './MoneyTransfer.css';
import { TransferService, CostCalculation } from '../types';

const MoneyTransfer: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services: TransferService[] = [
    {
      name: 'Wise',
      fee: '0.5-1%',
      speed: '1-2 days',
      rating: 'Best rates',
      icon: '💸',
      costEffective: true,
      safest: true,
      description: 'Low fees, transparent exchange rates'
    },
    {
      name: 'Remitly',
      fee: '1-3%',
      speed: 'Same day',
      rating: 'Fast transfers',
      icon: '⚡',
      costEffective: true,
      safest: true,
      description: 'Fast delivery, competitive rates'
    },
    {
      name: 'Western Union',
      fee: '2-5%',
      speed: 'Same day',
      rating: 'Wide network',
      icon: '🌍',
      costEffective: false,
      safest: true,
      description: 'Largest network, many locations'
    },
    {
      name: 'PayPal',
      fee: '2.9% + fixed',
      speed: 'Instant',
      rating: 'Convenient',
      icon: '📱',
      costEffective: false,
      safest: true,
      description: 'Easy to use, widely accepted'
    }
  ];

  const calculateCost = (service: TransferService): CostCalculation | null => {
    if (!amount) return null;
    const amt = parseFloat(amount);
    if (isNaN(amt)) return null;
    
    const feeRange = service.fee.replace('%', '').split('-');
    const minFee = parseFloat(feeRange[0]);
    const maxFee = feeRange[1] ? parseFloat(feeRange[1]) : minFee;
    const avgFee = (minFee + maxFee) / 2;
    
    return {
      fee: (amt * avgFee / 100).toFixed(2),
      total: (amt + (amt * avgFee / 100)).toFixed(2)
    };
  };

  return (
    <div className="money-transfer">
      <div className="header">
        <h1>💸 Money Transfer</h1>
        <p>Compare safest and cost-effective options</p>
      </div>

      <div className="container">
        <div className="card">
          <div className="card-title">Transfer Amount</div>
          <div className="input-group">
            <label>Amount to Transfer ($)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="services-list">
          {services.map((service, index) => {
            const cost = calculateCost(service);
            return (
              <div
                key={index}
                className={`service-card ${selectedService === index ? 'selected' : ''} ${service.costEffective && service.safest ? 'recommended' : ''}`}
                onClick={() => setSelectedService(index)}
              >
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <div className="service-info">
                    <h3>{service.name}</h3>
                    <p className="service-desc">{service.description}</p>
                  </div>
                  {(service.costEffective && service.safest) && (
                    <span className="recommended-badge">⭐ Best</span>
                  )}
                </div>
                
                <div className="service-details">
                  <div className="detail-item">
                    <span className="detail-label">Fee:</span>
                    <span className="detail-value">{service.fee}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Speed:</span>
                    <span className="detail-value">{service.speed}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Rating:</span>
                    <span className="detail-value">{service.rating}</span>
                  </div>
                </div>

                {cost && (
                  <div className="cost-calculation">
                    <div className="cost-item">
                      <span>Fee Amount:</span>
                      <strong>${cost.fee}</strong>
                    </div>
                    <div className="cost-item">
                      <span>Total Cost:</span>
                      <strong>${cost.total}</strong>
                    </div>
                  </div>
                )}

                {selectedService === index && (
                  <div className="selected-indicator">✓ Selected</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoneyTransfer;

