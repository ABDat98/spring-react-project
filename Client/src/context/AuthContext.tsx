// import { getCurrentUser } from '@/lib/appwrite/api'
// import { IContextType, IUser } from '@/types'
// import {createContext, useContext , useEffect, useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// export const INITIAL_USER = {
//     id:'',
//     name:'',
//     username:'',
//     email:'',
//     imageUrl:'',
//     bio:'',
// }
// // we need this to know if we have a user logged in 
// const INITIAL_STATE = {
//     user:INITIAL_USER , 
//     isLoading :false,
//     isAuthenticated : false,
//     setUser : ()=> {},
//     setIsAuthenticated: ()=>{},
//     checkAuthUser: async ()=> false as boolean, 
// }
// const AuthContext = createContext<IContextType>(INITIAL_STATE)
// const AuthProvider = ({children}: {children:React.ReactNode}) => {
//     const [user, setUser] = useState<IUser>(INITIAL_USER) 
//     const [isLoading, setIsLoading] = useState(false) 
//     const [isAuthenticated, setIsAuthenticated] = useState(false) 
//     const navigate = useNavigate();
//     const checkAuthUser = async()=>{

import { createContext, useContext, useEffect, useState } from "react";

//         try {
//             const currentAcount = await getCurrentUser()
//             if(currentAcount) {
//                 setUser({
//                     id:currentAcount.$id,
//                     name:currentAcount.name,
//                     username:currentAcount.username,
//                     email:currentAcount.email,
//                     imageUrl:currentAcount.imageUrl,
//                     bio:currentAcount.imageUrl,
//                 })
//                 setIsAuthenticated(true)
//                 return true
//             }
//             return false
//         } catch (error) {
//             console.log(error)
//             return false    
//         } finally {
//             setIsLoading(false)
//         }
//     } // this should call when we reload the page 

//     useEffect(()=>{
//         if(localStorage.getItem('cookieFallBack') === '[]'     ||  localStorage.getItem('cookieFallBack') === null
//          ) {
//             navigate('/')
//         }
//         checkAuthUser()
//     }, [])
//     const value = {
//         user , 
//         isLoading,
//         isAuthenticated ,
//         setUser,
//         setIsAuthenticated,
//         checkAuthUser, 
    
//     }
//   return (
//     <AuthContext.Provider value={value}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider
// export const useUserContext = ()=> useContext(AuthContext)

const AuthContext = createContext({
    isAuthenticated: false,
    isLoading: true,
    checkAuthUser: () => {},
    logout: () => {},
  });
  
  // Create a custom hook to use the AuthContext
  export const useUserContext = () => useContext(AuthContext);
  
  // Create the provider component
  export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    // Async function to check authentication
    const checkAuthUser = async () => {
      setIsLoading(true);
      const token = localStorage.getItem('token');
  
      if (token) {
        // Optionally verify the token or check its expiration here
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      
      setIsLoading(false);
    };
  
    // Call checkAuthUser when the component mounts
    useEffect(() => {
      checkAuthUser();
    }, []);
  
    // Logout function (optional)
    const logout = () => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    };
  
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          isLoading,
          checkAuthUser,
          logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  