import { useUserContext } from '@/context/AuthContext';
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const AuthLayout = () => {
  const { isAuthenticated, isLoading } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
           <img src="/assets/images/cover-6.png" alt="logo" className='hidden xl:block h-screen w-2/3 object-cover bg-no-repeat' />

          <section className='flex flex-1  bg-light-1 justify-center items-center flex-col py-10'>
            <Outlet></Outlet>
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout
