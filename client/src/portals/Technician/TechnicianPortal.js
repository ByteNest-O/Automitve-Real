
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TechnicianDashboard from './TechnicianDashboard';

const TechnicianPortal = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TechnicianDashboard />} />
        <Route path="/dashboard" element={<TechnicianDashboard />} />
      </Routes>
    </div>
  );
};

export default TechnicianPortal;
