import React, { Profiler, useState } from 'react'
import { Button } from '@/components/ui/button'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import { Outlet } from 'react-router-dom'
import Bottombar from '@/components/shared/Bottombar'

const RootLayout = () => {
  const [openState, setOpenState] = useState<boolean>(false);

  return (

    <div className="block w-full bg-light-1 relative">
      {/* Overlay Background (Only Affects the Background, Not the Menu) */}
      {openState && (
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40" />
      )}

      {/* Top Bar (Still Visible Normally) */}
      <div className="relative ">
        <Topbar openState={openState} setOpenState={setOpenState} />
      </div>

      {/* Main Content (Doesn't Get Faded) */}
      <section className="bg-light-1 px-5 py-10 md:px-10 lg:px-20 2xl:px-40   " >
        <Outlet />
      </section>

        <Bottombar />

    </div>
  )
}

export default RootLayout
