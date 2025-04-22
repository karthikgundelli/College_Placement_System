import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import './Drives.css';

const AdminDriveTable = () => {
  const navigate = useNavigate();
  
  // Initialize state - empty array (no localStorage)
  const [drives, setDrives] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    companyName: '',
    driveDate: '',
    status: 'open',
    skillsRequired: '',
    logo: ''
  });

  // Load drives from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'drives'), (snapshot) => {
      const drivesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDrives(drivesData);
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingId) {
        // Update existing drive in Firestore
        await updateDoc(doc(db, 'drives', editingId), formData);
      } else {
        // Add new drive to Firestore
        await addDoc(collection(db, 'drives'), formData);
      }
      
      // Reset form
      setEditingId(null);
      setFormData({
        id: '',
        companyName: '',
        driveDate: '',
        status: 'open',
        skillsRequired: '',
        logo: ''
      });
    } catch (error) {
      console.error("Error saving drive: ", error);
    }
  };

  const handleEdit = (drive) => {
    setEditingId(drive.id);
    setFormData({
      ...drive,
      driveDate: drive.driveDate.includes('T') ? drive.driveDate.split('T')[0] : drive.driveDate
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'drives', id));
    } catch (error) {
      console.error("Error deleting drive: ", error);
    }
  };

  const handleLogout = () => {
    // Clear authentication
    localStorage.removeItem('adminAuth');
    // Redirect to login
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="drive-management">
      <div className="admin-header">
        <h2>Manage Placement Drives</h2>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="drive-form">
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Drive Date:</label>
          <input
            type="date"
            name="driveDate"
            value={formData.driveDate}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Skills Required:</label>
          <input
            type="text"
            name="skillsRequired"
            value={formData.skillsRequired}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label>Logo URL:</label>
          <input
            type="text"
            name="logo"
            value={formData.logo}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit" className="submit-btn">
          {editingId ? 'Update Drive' : 'Add Drive'}
        </button>
        {editingId && (
          <button
            type="button"
            className="cancel-btn"
            onClick={() => {
              setEditingId(null);
              setFormData({
                id: '',
                companyName: '',
                driveDate: '',
                status: 'open',
                skillsRequired: '',
                logo: ''
              });
            }}
          >
            Cancel
          </button>
        )}
      </form>
      
      <div className="drive-table-container">
        <table className="drive-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Date</th>
              <th>Status</th>
              <th>Skills</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {drives.map((drive) => (
              <tr key={drive.id}>
                <td>
                  {drive.logo && (
                    <img src={drive.logo} alt={drive.companyName} className="company-logo" />
                  )}
                  {drive.companyName}
                </td>
                <td>{new Date(drive.driveDate).toLocaleDateString()}</td>
                <td>
                  <span className={`status-badge ${drive.status}`}>
                    {drive.status}
                  </span>
                </td>
                <td>{drive.skillsRequired}</td>
                <td>
                  <button
                    onClick={() => handleEdit(drive)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(drive.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDriveTable;