import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Ghost } from 'lucide-react'
import { useSignOutAccount } from '@/lib/react-quey/queriesAndMutations'
import { useUserContext } from '@/context/AuthContext'

const topBar = () => {
    const {mutate:signOut, isSuccess} = useSignOutAccount()
    const navigate = useNavigate()
    useEffect(() => {
        if(isSuccess) navigate(0);  
    }, [isSuccess])
    return (
        <section className="topbar">
            <div className="flex-between py-4 px-5">
                <Link to={"/"} className='flex gap-3 items-center'>
                    <img src="/assets/images/logo.svg" width={130} height={325} alt="logo" />
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
                </div>
            </div>
        </section>
    )
}

export default topBar
