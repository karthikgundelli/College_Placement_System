import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import './Drives.css';

const UserDriveTable = () => {
  const [drives, setDrives] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load drives from Firestore in real-time
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

  const filteredDrives = drives.filter((drive) => {
    if (filter === 'all') return true;
    return drive.status === filter;
  });

  return (
    <div className="drive-view">
      <h2>Upcoming Placement Drives</h2>
      
      <div className="filter-controls">
        <label>Filter by status:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Drives</option>
          <option value="open">Open</option>
          <option value="upcoming">Upcoming</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      
      <div className="drive-table-container">
        <table className="drive-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Date</th>
              <th>Status</th>
              <th>Skills Required</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrives.map((drive) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDriveTable;