

import { useFetchUserByToken } from "@/lib/react-quey/queriesAndMutations";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    isLoading: true,
    logout: () => {},
    user: null
  });
  
  // Create a custom hook to use the AuthContext
  export const useUserContext = () => useContext(AuthContext);
  
  // Create the provider component
  export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const { data: userData, isLoading: fetchingUser, error } = useFetchUserByToken();


   // Consolidate authentication and loading logic into one effect
   useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && userData) {
      setUser(userData);
      setIsAuthenticated(true);
      setIsLoading(false);
    } else if (error || !token) {
      setUser(null);
      setIsAuthenticated(false);
      setIsLoading(false);
    } else {
      setIsLoading(fetchingUser);
    }
  }, [userData, error, fetchingUser]);

  // Logout function
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  }, []);
  
  
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          isLoading,
          logout,
          user
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  