import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const DriveTable = () => {
  const [drives, setDrives] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDrives = async () => {
      try {
        const response = await axios.get('/drives');
        if (response && response.data) {
          setDrives(response.data);
        } else {
          setError('No data received from the server');
        }
      } catch (err) {
        console.error('Error fetching drives:', err);
        setError('Failed to fetch drives. Please try again later.');
      }
    };
    fetchDrives();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Date</th>
            <th>Skills Required</th>
          </tr>
        </thead>
        <tbody>
          {drives.map((drive) => (
            <tr key={drive._id}>
              <td>{drive.companyName}</td>
              <td>{new Date(drive.date).toLocaleDateString()}</td>
              <td>{drive.skillsRequired.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriveTable;