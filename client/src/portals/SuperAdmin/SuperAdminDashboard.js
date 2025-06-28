
import React from 'react';

const SuperAdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Super Admin Dashboard</h1>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Multi-Tenant Management</h3>
          <p>Manage multiple tenant organizations</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Manage Tenants
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>System Oversight</h3>
          <p>Monitor system health and performance</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            System Monitor
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Global Configuration</h3>
          <p>Configure global system settings</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Global Settings
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Platform Analytics</h3>
          <p>View platform-wide analytics and insights</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
