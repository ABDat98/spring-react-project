import { useUserContext } from '@/context/AuthContext';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutForm = () => {
    const { logout } = useUserContext(); // Assuming logout is a method in your context
    const navigate = useNavigate();
    useEffect(() => {
        logout(); // Call the logout function
        navigate('/sign-in'); // Redirect to the sign-in page or any other page after logging out
      }, [logout, navigate]);
      return null
  
}

export default LogoutForm
