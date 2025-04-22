import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const savedAuth = localStorage.getItem('adminAuth');
      const isAuth = savedAuth === 'true';
      
      if (!isAuth && location.pathname !== '/admin/login') {
        navigate('/admin/login', { replace: true });
      }
      
      setIsAuthenticated(isAuth);
      setLoading(false);
    };

    checkAuth();
  }, [navigate, location.pathname]);

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return null;
  
  return children;
};

export default AuthWrapper;