import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/login'); // Redirect to login if not an admin
    }
  }, [navigate]);

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Manage placement drives and users here.</p>
    </div>
  );
};

export default AdminPanel;