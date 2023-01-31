import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const PrivateRoutes = () => {
    const { user } = UserAuth();

    if (!user) {
      return <Navigate to='/signin' />;
    }
    return <Outlet/>;
  };

export default PrivateRoutes