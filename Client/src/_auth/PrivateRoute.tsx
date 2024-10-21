import { useUserContext } from '@/context/AuthContext'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const { isAuthenticated, isLoading } = useUserContext();

    if (isLoading) {
      return <div>Loading...</div>; // Optionally show a loading state
    }
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
      
}

export default PrivateRoute
