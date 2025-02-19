import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useNavigate } from 'react-router-dom'


const ProductCards = () => {
    const navigate = useNavigate();

    const itemsPerPage = 12;
    const totalItems = 25;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);


    const arrayProduct = [
        { name: 'teshirt' },
        { name: 'Shoez' },
        { name: 'Shoez' },
        { name: 'Shoez' },
        { name: 'Shoez' },
        { name: 'Shoez' },
        { name: 'Shoez' },
        { name: 'Shoez' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt' },
        { name: 'teshirt1' },
        { name: 'teshirt1' },
        { name: 'teshirt1' },
        { name: 'teshirt1' },
        { name: 'teshirt1' },
        { name: 'teshirt1' },
        { name: 'teshirt1' },



    ]

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = arrayProduct.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };



    return (
        <div className='flex flex-col h-full gap-5'>
            <div className="flex justify-between ">
                <span>                        Showing {indexOfFirstItem}-{indexOfLastItem} of {totalItems} results
                </span>
                <span>Show By Latest</span>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4'>
                {currentItems.map((item, index) => (
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
                                <Button onClick={()=> navigate(`/product/${item.name}`)}
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

            <div className='mt-auto'>
                <div className="flex justify-end items-center gap-2 mt-6">
                    <Button
                        variant="outline"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                            key={i}
                            variant={currentPage === i + 1 ? "default" : "outline"}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </Button>
                    ))}

                    <Button
                        variant="outline"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCards
