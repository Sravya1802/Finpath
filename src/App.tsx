import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BankComparison from './components/BankComparison';
import SafeSpending from './components/SafeSpending';
import CriticalAlerts from './components/CriticalAlerts';
import MoneyTransfer from './components/MoneyTransfer';
import TaxInfo from './components/TaxInfo';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banks" element={<BankComparison />} />
          <Route path="/spending" element={<SafeSpending />} />
          <Route path="/alerts" element={<CriticalAlerts />} />
          <Route path="/transfer" element={<MoneyTransfer />} />
          <Route path="/tax" element={<TaxInfo />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;

