
import React, { useState, useEffect } from 'react';
import { customerService } from '../../services/api';

const ServiceHistory = () => {
  const [serviceHistory, setServiceHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServiceHistory();
  }, []);

  const fetchServiceHistory = async () => {
    try {
      const response = await customerService.getAppointments();
      // Filter for completed services
      const completedServices = response.data.filter(appointment => 
        appointment.status === 'completed'
      );
      setServiceHistory(completedServices);
    } catch (error) {
      console.error('Error fetching service history:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading service history...</div>;
  }

  return (
    <div className="service-history">
      <h2>Service History</h2>
      
      {serviceHistory.length === 0 ? (
        <p>No completed services yet.</p>
      ) : (
        <div className="history-list">
          {serviceHistory.map((service, index) => (
            <div key={index} style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>{service.serviceType}</h3>
                <span style={{ color: '#28a745', fontWeight: 'bold' }}>Completed</span>
              </div>
              <p><strong>Date:</strong> {service.completedDate || service.preferredDate}</p>
              <p><strong>Vehicle:</strong> {service.vehicle || 'Vehicle info'}</p>
              <p><strong>Description:</strong> {service.description}</p>
              <p><strong>Technician:</strong> {service.technician || 'N/A'}</p>
              <p><strong>Cost:</strong> ${service.cost || '0.00'}</p>
              {service.notes && (
                <p><strong>Service Notes:</strong> {service.notes}</p>
              )}
            </div>
          ))}
        </div>
      )}
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Service Summary</h3>
        <p>Total Services Completed: {serviceHistory.length}</p>
        <p>Total Amount Spent: ${serviceHistory.reduce((total, service) => total + (parseFloat(service.cost) || 0), 0).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ServiceHistory;
