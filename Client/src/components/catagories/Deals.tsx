import React from 'react'
import { Button } from '../ui/button'

const Deals = () => {
    return (
        <div className='grid md:grid-cols-2 gap-8 '>
            <div className='flex flex-col justify-center gap-4 md:gap-5'>
                <h1 className='text-2xl md:text-4xl lg:text-4xl font-mono font-bold'>Deals of the Month</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi reiciendis facilis, quaerat in, unde aspernatur fuga eligendi distinctio placeat, temporibus et autem possimus vel eum totam velit nulla molestiae adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, iste omnis dolorem accusantium veniam at a vel, fugiat vitae corrupti, earum iure tenetur quisquam deleniti doloribus placeat expedita culpa nisi.</p>
                <div className='flex flex-row  gap-4 md:gap-5 flex-wrap   '>
                    <span className='flex flex-col items-center   p-3 md:p-6 border border-gray-200 rounded-md w-18 md:w-24'>
                        <strong className='font-bold text-2xl'>120</strong>
                        <small className='font-semibold'>Days</small>
                    </span>
                    <span className='flex flex-col  items-center p-3 md:p-6 border border-gray-200 rounded-md w-18 md:w-24'>
                        <strong className='font-bold text-2xl'>120</strong>
                        <small className='font-semibold'>Days</small>
                    </span>

                    <span className='flex flex-col  items-center p-3 md:p-6 border border-gray-200 rounded-md w-18 md:w-24'>
                        <strong className='font-bold text-2xl'>120</strong>
                        <small className='font-semibold'>Days</small>
                    </span>

                    <span className='flex flex-col  items-center p-3 md:p-6 border border-gray-200 rounded-md w-18 md:w-24'>
                        <strong className='font-bold text-2xl'>60</strong>
                        <small className='font-semibold'>Days</small>
                    </span>
                </div>
                <div className='md:mt-8'>
                    <Button size={'xl'}>
                        View All Products
                        <img src="/assets/icons/arrow-up.svg"  className='rotate-90 text-light-1 ' alt="" />

                    </Button>
                </div>
            </div>
            <div className='flex items-center justify-center  hidden md:block'>
                <img className='md:h-[500px] w-full bg-cover ' src="/assets/images/deals-7.png" alt="" />
            </div>

        </div>
    )
}

export default Deals
