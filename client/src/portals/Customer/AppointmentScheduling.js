
import React, { useState, useEffect } from 'react';
import { customerService } from '../../services/api';

const AppointmentScheduling = () => {
  const [appointments, setAppointments] = useState([]);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    vehicleId: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    description: ''
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await customerService.getAppointments();
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleScheduleAppointment = async (e) => {
    e.preventDefault();
    try {
      await customerService.scheduleAppointment(newAppointment);
      setNewAppointment({
        vehicleId: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        description: ''
      });
      setShowScheduleForm(false);
      fetchAppointments();
    } catch (error) {
      console.error('Error scheduling appointment:', error);
    }
  };

  return (
    <div className="appointment-scheduling">
      <h2>Appointments</h2>
      
      <button 
        onClick={() => setShowScheduleForm(!showScheduleForm)}
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        {showScheduleForm ? 'Cancel' : 'Schedule Appointment'}
      </button>

      {showScheduleForm && (
        <form onSubmit={handleScheduleAppointment} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Schedule New Appointment</h3>
          <div>
            <select
              value={newAppointment.serviceType}
              onChange={(e) => setNewAppointment({...newAppointment, serviceType: e.target.value})}
              required
              style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
            >
              <option value="">Select Service</option>
              <option value="oil-change">Oil Change</option>
              <option value="brake-service">Brake Service</option>
              <option value="tire-rotation">Tire Rotation</option>
              <option value="general-inspection">General Inspection</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              value={newAppointment.preferredDate}
              onChange={(e) => setNewAppointment({...newAppointment, preferredDate: e.target.value})}
              required
              style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
            <input
              type="time"
              value={newAppointment.preferredTime}
              onChange={(e) => setNewAppointment({...newAppointment, preferredTime: e.target.value})}
              required
              style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
          </div>
          <div>
            <textarea
              placeholder="Description of service needed"
              value={newAppointment.description}
              onChange={(e) => setNewAppointment({...newAppointment, description: e.target.value})}
              style={{ margin: '0.5rem', padding: '0.5rem', width: '400px', height: '100px' }}
            />
          </div>
          <button type="submit" style={{ margin: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
            Schedule Appointment
          </button>
        </form>
      )}

      <div className="appointments-list">
        <h3>Your Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments scheduled.</p>
        ) : (
          appointments.map((appointment, index) => (
            <div key={index} style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
              <h4>{appointment.serviceType}</h4>
              <p>Date: {appointment.preferredDate}</p>
              <p>Time: {appointment.preferredTime}</p>
              <p>Status: {appointment.status || 'Pending'}</p>
              <p>Description: {appointment.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduling;
