import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import QuantitySelector from '@/components/shared/QuantitySelector'
import { Button } from '@/components/ui/button'
import ProcedCheckout from '@/components/shared/ProcedCheckout'

const MyBags = () => {
    const handleQuantityChange = (newQuantity: number) => {
        console.log('Quantity updated to:', newQuantity);
        // You can update your cart state or perform other actions here.
    };

   
    return (
        <div className="grid grid-flow-row gap-5">
            <h1 className='font-mono text-lg md:text-xl lg:text-4xl'>Checkout</h1>
            <div className=" grid md:grid-cols-12 gap-12 ">
                {/* Left: Table Section */}
                <div className="md:col-span-8 overflow-x-auto"> {/* Ensure table doesn't break grid */}
                    <Table className="w-full"> {/* Ensure table stays within its container */}
                        <TableHeader>
                            <TableRow>
                                <TableHead className="whitespace-nowrap">Products</TableHead>
                                <TableHead className="text-left whitespace-nowrap">Price</TableHead>
                                <TableHead className="text-left whitespace-nowrap">Quantity</TableHead>
                                <TableHead className="text-right whitespace-nowrap">Subtotal</TableHead>
                                <TableHead className="text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[...Array(22)].map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                                            <img
                                                className="w-24 h-24 object-cover"
                                                src="/assets/images/t-shirt-8.png"
                                                alt="Product"
                                            />
                                            <div className="flex flex-col gap-1 justify-center">
                                                <span className="text-xs md:text-lg md:font-bold">Girls Pink Moana Printed Dress</span>
                                                <span className='text-xs'>Size: Medium</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-left">$80.00</TableCell>
                                    <TableCell className="text-left">
                                        <QuantitySelector initialQuantity={1} min={1} max={20} onChange={handleQuantityChange} />
                                    </TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                    <TableCell className="text-right">
                                        <button>
                                            <img src="/assets/icons/delete.svg" width={30} alt="Delete" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Right: Summary Section */}
                <div className='md:col-span-4 md:h-fit md:sticky md:top-10    '>
                   <ProcedCheckout/>
                </div>
            </div>
        </div>



    )
}

export default MyBags

