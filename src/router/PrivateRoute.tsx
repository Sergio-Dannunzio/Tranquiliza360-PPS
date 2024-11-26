import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import React from 'react';

const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;