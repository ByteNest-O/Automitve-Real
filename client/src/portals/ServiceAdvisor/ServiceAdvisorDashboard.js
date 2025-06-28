
import React from 'react';

const ServiceAdvisorDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Service Advisor Dashboard</h1>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Customer Management</h3>
          <p>Manage customer interactions and communications</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            View Customers
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Estimates & Quotes</h3>
          <p>Create and manage service estimates</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Create Estimate
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Technician Assignment</h3>
          <p>Assign jobs to available technicians</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            Assign Jobs
          </button>
        </div>
        
        <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
          <h3>Service History</h3>
          <p>View customer service history and records</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
            View History
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvisorDashboard;
