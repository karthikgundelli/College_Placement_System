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
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (drive) => {
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
      // Optimistic update - remove from local state immediately
      setDrives(prev => prev.filter(drive => drive.id !== id));
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error("Delete error details:", {
        code: error.code,
        message: error.message,
        documentId: id
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login', { replace: true });
  };

  if (loading) return <div className="loading">Loading drives...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="drive-management">
      <div className="admin-header">
        <h2>Manage Placement Drives</h2>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="drive-form">
        {/* Form fields remain the same as before */}
        {/* ... */}
        
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Processing...' : editingId ? 'Update Drive' : 'Add Drive'}
        </button>
        {editingId && (
          <button
            type="button"
            className="cancel-btn"
            onClick={() => {
              setEditingId(null);
              setFormData({
                companyName: '',
                driveDate: '',
                status: 'open',
                skillsRequired: '',
                logo: ''
              });
            }}
            disabled={loading}
          >
            Cancel
          </button>
        )}
      </form>
      
      <div className="drive-table-container">
        <table className="drive-table">
          {/* Table headers remain the same */}
          <tbody>
            {drives.map((drive) => (
              <tr key={drive.id}>
                {/* Table cells remain the same */}
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
