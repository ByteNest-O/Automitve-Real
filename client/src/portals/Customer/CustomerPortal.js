
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerDashboard from './CustomerDashboard';
import VehicleManagement from './VehicleManagement';
import AppointmentScheduling from './AppointmentScheduling';
import ServiceHistory from './ServiceHistory';

const CustomerPortal = () => {
  return (
    <div className="customer-portal">
      <h1>Customer Portal</h1>
      <Routes>
        <Route path="/" element={<CustomerDashboard />} />
        <Route path="/vehicles" element={<VehicleManagement />} />
        <Route path="/appointments" element={<AppointmentScheduling />} />
        <Route path="/history" element={<ServiceHistory />} />
      </Routes>
    </div>
  );
};

export default CustomerPortal;
