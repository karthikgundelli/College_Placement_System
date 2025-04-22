import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Email: {user.email}</p>
          {user.phone && <p>Phone: {user.phone}</p>}
        </div>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;