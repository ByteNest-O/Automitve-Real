
import React, { useState, useEffect } from 'react';
import { customerService } from '../../services/api';

const CustomerDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, vehiclesRes, appointmentsRes] = await Promise.all([
          customerService.getProfile(),
          customerService.getVehicles(),
          customerService.getAppointments()
        ]);
        
        setProfile(profileRes.data);
        setVehicles(vehiclesRes.data);
        setAppointments(appointmentsRes.data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="customer-dashboard">
      <h2>Welcome to Your Dashboard</h2>
      
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>My Vehicles</h3>
          <p>{vehicles.length} vehicles registered</p>
        </div>
        
        <div className="dashboard-card">
          <h3>Upcoming Appointments</h3>
          <p>{appointments.filter(apt => new Date(apt.date) > new Date()).length} scheduled</p>
        </div>
        
        <div className="dashboard-card">
          <h3>Recent Services</h3>
          <p>{appointments.filter(apt => apt.status === 'completed').length} completed</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
