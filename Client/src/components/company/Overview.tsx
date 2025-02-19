import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const Overview = ({ symbol, price, change, changePercent, currency }: { symbol: any, price: any, change: any, changePercent: any, currency: any }) => {
    return (
        <>
            <Card className='relative bg-light-1 border-none shadow-sm'>
                <CardHeader>
                    <CardTitle className='absolute top-4 left-5 text-lg xl:text-xl 2xl:text-2xl '>Stock Quote</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between mt-2">
                        <span className='text-lg xl:text-2xl 2xl:text-2xl flex items-center text-neutral-900'>
                            {symbol}


                        </span>
                        <span className={`text-lg xl:text-xl 2xl:text-2xl ${change > 0 ? "text-lime-500" : "text-rose-500"} `}>
                            <span className='text-lg xl:text-xl 2xl:text-2xl m-2  text-neutral-600'>{price} {currency}</span>

                            {change}
                            <span>({changePercent})%</span>
                        </span>
                    </div>
                </CardContent>


            </Card>
        </>

    )
}

export default Overview
