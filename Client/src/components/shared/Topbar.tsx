import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Ghost } from 'lucide-react'
import { useSignOutAccount } from '@/lib/react-quey/queriesAndMutations'
import { useUserContext } from '@/context/AuthContext'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ShopMenuProps {
    openState: boolean;
    setOpenState: (state: boolean) => void; // Function type for state setter
  }

const topBar = ({ openState , setOpenState }  : ShopMenuProps) => {
    type Checked = DropdownMenuCheckboxItemProps["checked"]
    const { isAuthenticated, user } = useUserContext();
    console.log(user)


    const { mutate: signOut, isSuccess } = useSignOutAccount()
    const navigate = useNavigate()
    useEffect(() => {
        if (isSuccess) navigate(0);
    }, [isSuccess])


    const toggleMenu = () => {
        setOpenState(!openState);
    };

    return (
        <section className="topbar">
            <div className=" py-4 px-5">
                <nav className=" relative bg-light-1   dark:bg-gray-900">
                    <div className="md:max-w-screen-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="assets/icons/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vivid Store</span>
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto self-center" id="navbar-default ">
                            <ul className=" flex flex-col p-4 md:p-0 mt-4     md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block      " aria-current="page">Home</a>
                                </li>
                                <li >
                                    <button className="flex items-center" onClick={toggleMenu}>
                                        <a href="#" className="block">Shop</a>
                                        <img
                                            className={`self-start transform transition-transform duration-300 ${openState ? "rotate-180" : "rotate-0"
                                                }`}
                                            src="/assets/icons/arrow-1.svg"
                                            alt=""
                                        />
                                    </button>


                                </li>
                                <li>
                                    <a href="#" className="block       " aria-current="page">Our Story</a>
                                </li>
                                <li>
                                    <a href="#" className="block     " aria-current="page">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="block      " aria-current="page">Contact us</a>
                                </li>

                            </ul>
                        </div>
                        <div className="hidden w-full md:block md:w-auto self-center" id="navbar-default ">
                            <ul className=" flex flex-col p-4 md:p-0    gap-4    md:flex-row  items-center">

                                <img src="/assets/icons/search.svg" alt="" />
                                {isAuthenticated ? (
                                    <>
                                    {user?.firstName}
                                    </>


                                ) : (
                                    <>
                                        <Button size={"md"}>
                                            Login
                                        </Button>

                                    </>
                                )}


                            </ul>
                        </div>


                    </div>
                    <div id='shop-menu' className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-full md:w-1/2 bg-light-1  rounded-b-lg px-8 py-8 grid grid-flow-col grid-cols-4 items-center transition-all duration-300 ${openState
                        ? "opacity-100 scale-100 translate-y-0 visible z-50"
                        : "opacity-0 scale-95 translate-y-[-10px] invisible"
                        }`}
                    >
                        <div className=' h-full flex flex-col  gap-5'>
                            <div>
                                <span className='font-bold'>Men</span>
                                <ul className='mt-2 flex flex-col gap-3'>
                                    <li>
                                        <button>
                                            T-Shirts

                                        </button>
                                    </li>
                                    <li>Casual Shirts</li>
                                    <li>Formal Shirts</li>
                                    <li>Jackets</li>
                                    <li>Blazers & Costs</li>

                                </ul>
                            </div>
                            <div>
                                <span className='font-bold'>Indian & Festaive Wear</span>
                                <ul className='mt-2 flex flex-col gap-3'>
                                    <li>Kurtas & Kurta Sets</li>
                                    <li>Sherwanis</li>

                                </ul>
                            </div>


                        </div>
                        <div className=' h-full flex flex-col gap-5'>
                            <div>
                                <span className='font-bold'>Men</span>
                                <ul className='mt-2 flex flex-col gap-3'>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>

                                </ul>
                            </div>
                            <div>
                                <span className='font-bold'>Men</span>
                                <ul className='mt-2 flex flex-col gap-3'>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>

                                </ul>
                            </div>


                        </div>
                        <div className='  h-full flex flex-col gap-5'>
                            <div>
                                <span className='font-bold'>Men</span>
                                <ul className='mt-2 flex flex-col gap-3'>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>

                                </ul>
                            </div>
                            <div>
                                <span className='font-bold'>Men</span>
                                <ul className='mt-2 flex flex-col gap-3'>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>

                                </ul>
                            </div>


                        </div>
                        <div className=' h-full flex flex-col gap-5'>
                            <div>
                                <span className='font-bold'>Men</span>
                                <ul className='mt-2 flex flex-col gap-3'>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>

                                </ul>
                            </div>
                            <div>
                                <span className='font-bold'>Men</span>
                                <ul className='mt-2 flex flex-col gap-3'>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>
                                    <li>sdsds</li>

                                </ul>
                            </div>


                        </div>


                    </div>

                </nav>


                {/* <Link to={"/"} className='flex gap-3 items-center'>
                    <img src="/assets/images/logo-1.svg" width={130} height={325} alt="logo" />
                </Link>
                <div className="flex gap-4">
                    <Button variant="ghost" className='shad-button_ghost' onClick={()=>signOut()}>
                        <img src="/assets/icons/logout.svg" alt="logout" />
                    </Button>
                    <Link to={`/profile/1`} className='flex-center gap-3 '>
                        <img 
                        src={
                         '/assets/icons/profile-placeholder.svg'}  alt="profile"  className='h-8 w-8 rounded-full'/>
                    </Link>
                </div> */}
            </div>
        </section>
    )
}

export default topBar
