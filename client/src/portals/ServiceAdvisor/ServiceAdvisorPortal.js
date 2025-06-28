
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceAdvisorDashboard from './ServiceAdvisorDashboard';

const ServiceAdvisorPortal = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ServiceAdvisorDashboard />} />
        <Route path="/dashboard" element={<ServiceAdvisorDashboard />} />
      </Routes>
    </div>
  );
};

export default ServiceAdvisorPortal;
