
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  };

  if (token && user.role) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Automotive SaaS Platform</h1>
        <p>Hello, {user.firstName} {user.lastName}!</p>
        <p>Role: {user.role}</p>
        
        <div style={{ margin: '2rem 0' }}>
          {user.role === 'customer' && (
            <Link to="/customer" style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
              Go to Customer Portal
            </Link>
          )}
          {user.role === 'technician' && (
            <Link to="/technician" style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
              Go to Technician Portal
            </Link>
          )}
          {user.role === 'service-advisor' && (
            <Link to="/service-advisor" style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
              Go to Service Advisor Portal
            </Link>
          )}
          {user.role === 'admin' && (
            <Link to="/admin" style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
              Go to Admin Portal
            </Link>
          )}
          {user.role === 'super-admin' && (
            <Link to="/super-admin" style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
              Go to Super Admin Portal
            </Link>
          )}
        </div>
        
        <button onClick={handleLogout} style={{ padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Automotive SaaS Platform</h1>
      <p>Comprehensive automotive service management platform</p>
      
      <div style={{ margin: '2rem 0' }}>
        <Link to="/login" style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
          Login
        </Link>
        <Link to="/register" style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
