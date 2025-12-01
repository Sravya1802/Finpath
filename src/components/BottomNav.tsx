import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
        <span className="nav-icon">🏠</span>
        <span className="nav-label">Home</span>
      </Link>
      <Link to="/banks" className={`nav-item ${isActive('/banks') ? 'active' : ''}`}>
        <span className="nav-icon">🏦</span>
        <span className="nav-label">Banks</span>
      </Link>
      <Link to="/spending" className={`nav-item ${isActive('/spending') ? 'active' : ''}`}>
        <span className="nav-icon">💳</span>
        <span className="nav-label">Spending</span>
      </Link>
      <Link to="/alerts" className={`nav-item ${isActive('/alerts') ? 'active' : ''}`}>
        <span className="nav-icon">🔔</span>
        <span className="nav-label">Alerts</span>
      </Link>
      <Link to="/tax" className={`nav-item ${isActive('/tax') ? 'active' : ''}`}>
        <span className="nav-icon">📅</span>
        <span className="nav-label">Tax</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
