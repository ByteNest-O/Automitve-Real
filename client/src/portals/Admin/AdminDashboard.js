
import React from 'react';

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>User Management</h3>
          <p>Manage users, roles, and permissions</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Manage Users
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Reports & Analytics</h3>
          <p>View business reports and analytics</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            View Reports
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>System Configuration</h3>
          <p>Configure system settings and preferences</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            System Settings
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Inventory Management</h3>
          <p>Manage parts inventory and suppliers</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Manage Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
