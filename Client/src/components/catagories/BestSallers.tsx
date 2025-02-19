import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

const BestSallers = () => {
    return (
        <div className='flex flex-col md:gap-8 gap-4 lg:gap-10    '>
            <h3 className='md:mx-auto text-2xl md:text-4xl md:font-mono md:tracking-tighter'>  Our Bestseller
            </h3>
            <div className="cards grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-4 md:gap-8 lg:gap-10 ">
                {[...Array(10)].map((_, index) => (
                    <div className='flex flex-col gap-2'>
                        <Card className="relative cursor-pointer group" onClick={() => console.log("SS")}>

                            {/* Hover Icons */}
                            <div className='absolute top-4 right-4 z-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2
                             transition-all duration-300 ease-in-out flex flex-col gap-2'>
                                <button className='rounded-full bg-light-1 p-1 hover:bg-gray-300 ' onClick={() => { }}>
                                    <img src="/assets/icons/star.svg" width={25} height={25} alt="" />
                                </button>
                                <button className='rounded-full bg-light-1 p-1  hover:bg-gray-300' onClick={() => { }}>
                                    <img src="/assets/icons/exchange.svg" width={25} height={25} alt="" />
                                </button>
                                <button className='rounded-full bg-light-1 p-1 hover:bg-gray-300' onClick={() => { }}>
                                    <img src="/assets/icons/eye.svg" width={25} height={25} alt="" />
                                </button>
                            </div>

                            {/* Card Content with Background Image */}
                            <CardContent className="bg-[url(/assets/images/shoez.jpg)] bg-cover bg-center flex max-md:h-52 md:aspect-square items-end justify-center p-2 md:p-6 relative overflow-hidden">

                                {/* Overlay Effect */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>

                                {/* Button Appears on Hover */}
                                <Button
                                    className="bg-light-1 text-primary w-full hover:bg-gray-300 transition 
                             opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2
                             transition-all duration-300 ease-in-out relative z-10"
                                    size="lg"
                                >
                                    Casual Shoes
                                </Button>
                            </CardContent>

                        </Card>

                        {/* Product Details */}
                        <div className='flex flex-col'>
                            <span className='font-bold'> Rodsatr</span>
                            <small>Printed Cotton T-shirt</small>
                            <small className='text-md'>$38.00 </small>
                        </div>
                    </div>

                ))}

            </div>


        </div>
    )
}

export default BestSallers
