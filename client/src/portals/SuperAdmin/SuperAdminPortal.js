
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SuperAdminDashboard from './SuperAdminDashboard';

const SuperAdminPortal = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SuperAdminDashboard />} />
        <Route path="/dashboard" element={<SuperAdminDashboard />} />
      </Routes>
    </div>
  );
};

export default SuperAdminPortal;
