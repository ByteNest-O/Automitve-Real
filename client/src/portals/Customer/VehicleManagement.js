
import React, { useState, useEffect } from 'react';
import { customerService } from '../../services/api';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    make: '',
    model: '',
    year: '',
    vin: '',
    licensePlate: ''
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await customerService.getVehicles();
      setVehicles(response.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleAddVehicle = async (e) => {
    e.preventDefault();
    try {
      await customerService.addVehicle(newVehicle);
      setNewVehicle({ make: '', model: '', year: '', vin: '', licensePlate: '' });
      setShowAddForm(false);
      fetchVehicles();
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  return (
    <div className="vehicle-management">
      <h2>My Vehicles</h2>
      
      <button 
        onClick={() => setShowAddForm(!showAddForm)}
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        {showAddForm ? 'Cancel' : 'Add Vehicle'}
      </button>

      {showAddForm && (
        <form onSubmit={handleAddVehicle} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Add New Vehicle</h3>
          <div>
            <input
              type="text"
              placeholder="Make"
              value={newVehicle.make}
              onChange={(e) => setNewVehicle({...newVehicle, make: e.target.value})}
              required
              style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
            <input
              type="text"
              placeholder="Model"
              value={newVehicle.model}
              onChange={(e) => setNewVehicle({...newVehicle, model: e.target.value})}
              required
              style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Year"
              value={newVehicle.year}
              onChange={(e) => setNewVehicle({...newVehicle, year: e.target.value})}
              required
              style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
            <input
              type="text"
              placeholder="VIN"
              value={newVehicle.vin}
              onChange={(e) => setNewVehicle({...newVehicle, vin: e.target.value})}
              style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="License Plate"
              value={newVehicle.licensePlate}
              onChange={(e) => setNewVehicle({...newVehicle, licensePlate: e.target.value})}
              style={{ margin: '0.5rem', padding: '0.5rem', width: '200px' }}
            />
          </div>
          <button type="submit" style={{ margin: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
            Add Vehicle
          </button>
        </form>
      )}

      <div className="vehicles-list">
        {vehicles.length === 0 ? (
          <p>No vehicles registered yet.</p>
        ) : (
          vehicles.map((vehicle, index) => (
            <div key={index} style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
              <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
              <p>VIN: {vehicle.vin}</p>
              <p>License Plate: {vehicle.licensePlate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VehicleManagement;
