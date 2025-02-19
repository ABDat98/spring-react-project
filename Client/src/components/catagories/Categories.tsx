import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from '../ui/button';


const Categories = () => {
    const [api, setApi] = React.useState<CarouselApi | null>(null);

    
    React.useEffect(() => {
        if (!api) {
            return
        }

    }, [api])


    return (
        <div className='categories  flex flex-col  gap-4 '>
            <div className="flex justify-between items-center">
                <h3 className=' text-2xl md:text-2xl lg:text-4xl md:font-mono tracking-tighter'>Shop By Categories</h3>
                <div className='flex gap-2'>
                    <button
                        onClick={() => api?.scrollPrev()}
                        className="bg-primary p-0 h-10 md:h-full md:p-4 rounded-sm shadow-md hover:bg-gray-300 transition"
                    >
                        <ChevronLeft className="w-6 h-6 text-light-1" />
                    </button>
                    <button
                        onClick={() => api?.scrollNext()}
                        className="bg-primary p-0 h-10 md:h-full md:p-4 rounded-sm shadow-md hover:bg-gray-300 transition"
                    >
                        <ChevronRight className="w-6 h-6 text-light-1" />
                    </button>

                </div>
            </div>
            <div className="coursal-content">
                <Carousel setApi={setApi} className="overflow-hidden">
                    <CarouselContent className="flex">
                        {[...Array(10)].map((_, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/5 ">
                                <div className="p-1">
                                    <Card className='cursor-pointer' onClick={() => console.log("SS")}>
                                        <CardContent className="bg-[url(/assets/images/shoez.jpg)] bg-cover bg-center flex  max-md:h-60 md:aspect-square items-end justify-center p-2 md:p-6">
                                            <Button className="bg-light-1 text-primary w-full hover:bg-gray-300 transition" size={"lg"}>
                                                Casual Shoes
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>



        </div>
    );
}

export default Categories
