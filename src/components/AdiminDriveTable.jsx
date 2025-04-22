import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import './Drives.css';

const AdminDriveTable = () => {
  const navigate = useNavigate();
  
  const [drives, setDrives] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    driveDate: '',
    status: 'open',
    skillsRequired: '',
    logo: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false); // New state to control form visibility

  // Load drives from Firestore
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(collection(db, 'drives'), 
      (snapshot) => {
        const drivesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDrives(drivesData);
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (editingId) {
        await updateDoc(doc(db, 'drives', editingId), formData);
      } else {
        await addDoc(collection(db, 'drives'), formData);
      }
      
      setEditingId(null);
      setFormData({
        companyName: '',
        driveDate: '',
        status: 'open',
        skillsRequired: '',
        logo: ''
      });
      setShowForm(false); // Hide form after submission
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDrive = () => {
    setShowForm(true); // Show form when "Add Drive" button is clicked
    setEditingId(null);
    setFormData({
      companyName: '',
      driveDate: '',
      status: 'open',
      skillsRequired: '',
      logo: ''
    });
  };

  const handleEdit = (drive) => {
    setShowForm(true); // Show form when editing
    setEditingId(drive.id);
    setFormData({
      companyName: drive.companyName,
      driveDate: drive.driveDate.includes('T') ? drive.driveDate.split('T')[0] : drive.driveDate,
      status: drive.status,
      skillsRequired: drive.skillsRequired,
      logo: drive.logo
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this drive?')) return;
    
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'drives', id));
      setDrives(prev => prev.filter(drive => drive.id !== id));
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
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

      {/* Add Drive Button - Only shown when form is hidden */}
      {!showForm && (
        <button onClick={handleAddDrive} className="add-drive-btn">
          Add New Drive
        </button>
      )}

      {/* Form Section - Conditionally rendered */}
      {showForm && (
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
          
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Processing...' : editingId ? 'Update Drive' : 'Add Drive'}
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => setShowForm(false)}
            disabled={loading}
          >
            Cancel
          </button>
        </form>
      )}
      
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
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(drive.id)}
                    className="delete-btn"
                    disabled={loading}
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
