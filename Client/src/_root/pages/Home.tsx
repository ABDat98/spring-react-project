import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import Categories from '@/components/catagories/categories'
import BestSallers from '@/components/catagories/bestSallers'
import Deals from '@/components/catagories/Deals'
const Home = () => {

  return (

    <>
      <div className='hidden md:block  '>
        <div className="relative bg-[url(/assets/images/shop-cover.png)] bg-cover bg-center min-h-[250px] w-full mx-auto sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[850px] 2xl:min-h-[780px]">
          <div className='absolute   transform  px-10 md:px-20  translate-y-1/2  flex flex-col gap-2 md:gap-4 xl:gap-5'>
            <h3 className='text-lg md:text-lg lg:text-xl xl:text-4xl'>Classic Exclusive</h3>
            <h1 className=' text-2xl md:text-2xl lg:text-4xl xl:text-7xl font-bold  font-serif' >Women’s Collection</h1>
            <small className=' text-md md:text-md lg:text-lg xl:text-2xl font-normal font-normal'>UPTO 40% OFF</small>
            <div className=''>
              <Button className="mt-5  gap-2  " size={"xl"} >
                Shop Now
                <img src="/assets/icons/arrow-up.svg"  className='rotate-90 text-light-1 ' alt="" />
              </Button>
            </div>
          </div>


        </div>
      </div>
      <div  className='px-8  md:px-5  md:p-10 lg:px-28 lg:mt-24'>
        <Categories/>
      </div>
      <div  className='px-8 md:px-5 md:p-10 lg:px-28 mt-12 lg:mt-24'>
        <BestSallers/>
      </div>
      <div  className='px-8 md:px-5 md:p-10 lg:px-28  mt-12 lg:mt-24'>
        <Deals/>
      </div>


    </>
  )
}

export default Home
