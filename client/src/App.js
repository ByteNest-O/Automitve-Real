
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import portals
import CustomerPortal from './portals/Customer/CustomerPortal';
import TechnicianPortal from './portals/Technician/TechnicianPortal';
import ServiceAdvisorPortal from './portals/ServiceAdvisor/ServiceAdvisorPortal';
import AdminPortal from './portals/Admin/AdminPortal';
import SuperAdminPortal from './portals/SuperAdmin/SuperAdminPortal';

// Import components
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './pages/Home';
import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route path="/customer/*" element={
            <ProtectedRoute allowedRoles={['customer']}>
              <CustomerPortal />
            </ProtectedRoute>
          } />
          
          <Route path="/technician/*" element={
            <ProtectedRoute allowedRoles={['technician']}>
              <TechnicianPortal />
            </ProtectedRoute>
          } />
          
          <Route path="/service-advisor/*" element={
            <ProtectedRoute allowedRoles={['service-advisor']}>
              <ServiceAdvisorPortal />
            </ProtectedRoute>
          } />
          
          <Route path="/admin/*" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPortal />
            </ProtectedRoute>
          } />
          
          <Route path="/super-admin/*" element={
            <ProtectedRoute allowedRoles={['super-admin']}>
              <SuperAdminPortal />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
