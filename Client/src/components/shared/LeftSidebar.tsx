import { sidebarLinks } from '@/contants'
import { useUserContext } from '@/context/AuthContext'
import { useSignOutAccount } from '@/lib/react-quey/queriesAndMutations'
import { INavLink } from '@/types'
import React, { useContext, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

const LeftSidebar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount()
  const { pathname } = useLocation();
  const { user, isAuthenticated, logout } = useUserContext();
  console.log(user)
  const navigate = useNavigate()
  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess])
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11 ">

        <Link to={`/profile/2`} className='flex gap-3 items-center border-b border-gray-1 pb-5'>
          <img src={'/assets/icons/logo.svg'} alt="" />
          <div className="flex flex-col">
            <p className="body-bold">
              {user ? (
                <p>Alatrash Market!</p>
              ) : (
                <p>Loading user information...</p>
              )}

            </p>
           
          </div>
        </Link>
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route
            console.log(pathname)
            return (
              <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-primary text-white'}`}>
                <NavLink to={link.route} className="flex p-4 gap-4 items-center" >
                  <img className={`group-hover:invert-white ${isActive && 'invert-white'}`} src={link.imgURL} alt="" />
                  {link.label}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='flex flex-col gap-6'>

        <Button variant="ghost" className='shad-button_ghost' onClick={() => signOut()}>
          <img src="/assets/icons/logout.svg" alt="logout" />
          <p className='small-medium lg:base-medium'>Logout</p>
        </Button>
      </div>
    </nav>
  )
}

export default LeftSidebar
