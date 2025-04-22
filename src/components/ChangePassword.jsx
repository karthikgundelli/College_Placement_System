import React, { useState } from 'react';

const ChangePassword = () => {
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPass !== confirmPass) {
      setError('New passwords do not match');
      return;
    }
    
    // Here you would typically verify current password with backend
    // For now we'll update the environment variable manually
    setError('');
    setSuccess(true);
    console.log('New password would be:', newPass);
    alert('In production, this would update the password on the backend');
  };

  return (
    <div className="password-change-form">
      <h2>Change Admin Password</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Password updated successfully!</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPass}
            onChange={(e) => setCurrentPass(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;