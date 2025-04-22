import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your actual password or API call
    if (password === process.env.REACT_APP_ADMIN_PASSWORD || password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/drives', { replace: true });
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;