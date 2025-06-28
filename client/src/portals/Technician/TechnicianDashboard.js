
import React from 'react';

const TechnicianDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Technician Dashboard</h1>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>My Work Orders</h3>
          <p>View and manage assigned work orders</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            View Work Orders
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Schedule</h3>
          <p>View your daily schedule and appointments</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            View Schedule
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Parts Inventory</h3>
          <p>Check parts availability and request orders</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            View Inventory
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Time Tracking</h3>
          <p>Log work hours and job progress</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Track Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicianDashboard;
