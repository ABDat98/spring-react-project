import React from 'react'

const StoreBenfit = () => {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <div className='flex flex-col gap-1 '>
                <img src="/assets/icons/shipping.svg" className='w-[35px]  md:w-[40px]' alt="" />
                <h3 className=' text-md md:text-xl font-bold  md:mt-4'>Free Shipping</h3>
                <p className='text-xs md:text-md lg:text-lg'>Free Shipping for order above 150$</p>
            </div>
            <div className='flex flex-col gap-1 '>
                <img src="/assets/icons/money.svg" className="w-[35px]  md:w-[40px]" alt="" />
                <h3 className=' text-md md:text-xl font-bold  md:mt-4'>Money Guarantee</h3>
                <p className='text-xs md:text-md lg:text-lg'>with 30 days for an exchange</p>
            </div>
            <div className='flex flex-col gap-1 '>
                <img src="/assets/icons/support.svg" className="w-[35px]  md:w-[40px]" alt="" />
                <h3 className=' text-md md:text-xl font-bold md:mt-4'>Online Support</h3>
                <p className='text-xs md:text-md lg:text-lg'>24 hours a day, 7 days a week</p>
            </div>
            <div className='flex flex-col gap-1 '>
                <img src="/assets/icons/payment.svg" className="w-[35px]  md:w-[40px]" alt="" />
                <h3 className=' text-md md:text-xl font-bold  md:mt-4'>Flexible Payment</h3>
                <p className='text-xs md:text-md lg:text-lg'>Pay with multiple credit cards</p>
            </div>

        </div>
    )
}

export default StoreBenfit
