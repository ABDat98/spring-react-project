import CardDetails from '@/components/catagories/CardDetails';
import RelatedProduct from '@/components/catagories/RelatedProduct';
import StarRating from '@/components/catagories/StarRating';
import StoreBenfit from '@/components/catagories/StoreBenfit';
import QuantitySelector from '@/components/shared/QuantitySelector';
import { AccordionContent, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { AccordionItem } from '@radix-ui/react-accordion';
import { Label } from '@radix-ui/react-label';
import { Popover } from '@radix-ui/react-popover';
import { icons } from 'lucide-react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [open, setOpen] = useState(false);

  const colors = [
    { name: "Red", value: "red", color: "bg-red" },
    { name: "Green", value: "green", color: "bg-green-500" },
    { name: "Blue", value: "blue", color: "bg-blue-500" },
  ];
  const sizes = ["S", "M", "L", "XL"];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity: number) => {
    console.log('Quantity updated to:', newQuantity);
    // You can update your cart state or perform other actions here.
  };

  return (
    <div className='relative grid grid-flow-row gap-5'>
      {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setOpen(false)}></div>}
      <div className='flex '>
        <span>Shop -  Shop - {productId}</span>
      </div>
      <div className="grid md:grid-cols-12 gap-6">
        {/* Left Section (Main Image & Thumbnails) */}
        <div className="col-span-6 w-full">
          {/* Main Image (Fix Height) */}
          <img className="w-full max-h-[550px] aspect-[4/3] object-cover rounded-lg"
            src="/assets/images/t-shirt-8.png" alt="Main T-Shirt" />

          {/* Thumbnails (Keep Compact) */}
          <div className="grid grid-cols-4 gap-3 mt-3">
            <img className="w-full aspect-square object-cover rounded-lg cursor-pointer" src="/assets/images/t-shirt-8.png" alt="Thumbnail 1" />
            <img className="w-full aspect-square object-cover rounded-lg cursor-pointer" src="/assets/images/t-shirt-8.png" alt="Thumbnail 2" />
            <img className="w-full aspect-square object-cover rounded-lg cursor-pointer" src="/assets/images/t-shirt-8.png" alt="Thumbnail 3" />
            <img className="w-full aspect-square object-cover rounded-lg cursor-pointer" src="/assets/images/t-shirt-8.png" alt="Thumbnail 4" />
          </div>
        </div>

        {/* Right Section (Image Details) */}
        <div className="col-span-6 flex flex-col gap-2 p-2 ">
          <h1 className='text-4xl font-bold '>YK Diesny </h1>
          <small className='text-lg'>Girls Pink Moana Printed Dress</small>
          {/* Starts */}
          <StarRating rating={4.6} reviews={1200} />
          <span className="text-xl font-semibold" itemProp="price" content="29.99">$29.99</span>
          <p className="text-md ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laboriosam repudiandae aut excepturi nobis quaerat distinctio minima voluptatibus, unde eius? Repudiandae quia alias fugit voluptatibus sint. Sit sint harum ipsam!</p>
          {/* Colors */}
          <div className='flex flex-col gap-2 mt-2'>
            <h1 className='text-lg font-semibold mt-2'>Color</h1>
            <ToggleGroup
              type="single"
              className="flex justify-start   flex-row gap-2"
              value={selectedColor}
              onValueChange={handleColorChange}

            >
              {colors?.map((color) => (
                <div key={color.value} className="flex items-center gap-2">
                  <ToggleGroupItem
                    value={color.value}
                    className={`rounded-md border  ${color.color} 
                     ${selectedColor === color.value ? "ring-1 ring-primary" : ""}`}
                  />
                </div>
              ))}
            </ToggleGroup>


          </div>
          {/* Sizes */}
          <div className='flex flex-col gap-2 mt-2'>

            <h1 className='text-lg font-semibold mt-2'>Siez</h1>
            <ToggleGroup
              type="single"
              className="flex justify-start   flex-row gap-2"
              value={selectedSize}
              onValueChange={handleSizeChange}

            >
              {sizes?.map((size) => (
                <div key={size} className="flex  items-center gap-2">
                  <ToggleGroupItem
                    value={size}
                    className={`rounded-md border border-gray-300  
                     ${selectedSize === size ? " bg-primary text-light-1" : ""}`}
                  >
                    {size}
                  </ToggleGroupItem>
                </div>
              ))}
            </ToggleGroup>

          </div>
          {/* QuantitySelector */}
          <div className='mt-4 md:mt-6 lg:mt-8 flex flex-row flex-wrap  gap-2 md:gap-5  items-center'>
            <QuantitySelector
              initialQuantity={1}
              min={1}
              max={10} // For example, limit to 10 items in stock.
              onChange={handleQuantityChange}
            />

            <div className="xl:w-72 2xl:w-96">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button className="md:w-full" size={"lg"}>
                    Add to Cart
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  side="top"
                  align="center"
                  className="w-auto   max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl max-h-[500px] overflow-y-auto bg-light-1 my-4 p-4 shadow-lg rounded-lg"
                >
                  <div className="grid gap-2">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">You have 3 items in your cart.</p>
                    </div>
                    <div className="grid gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative grid grid-cols-5 items-center border-b border-gray-300 py-4 gap-4">
                          <img className="col-span-1 w-16 h-16 object-cover" src="/assets/images/t-shirt-8.png" alt="" />
                          <div className="col-span-4 flex flex-col gap-1">
                            <span className="text">Girls Pink Moana Printed Dress</span>
                            <span className="font-bold">1 × $80.00</span>
                            <span>Size: Medium</span>
                          </div>
                          <div className="absolute right-0 bottom-5">
                            <img src="/assets/icons/delete.svg" width={30} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                      <div className="flex justify-between">
                        <span className="font-bold">Subtotal</span>
                        <span className="font-bold">$200</span>
                      </div>
                      <Button className="w-full" variant={"outline"} size={"lg"}>
                        View Cart
                      </Button>
                      <Button className="w-full" size={"lg"}>
                        Checkout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <Button className='bg-light-1 border border-primary p-2 hover:bg-gray-300' size={'icon'}>
                <img src="/assets/icons/star.svg" alt="" />

              </Button>

            </div>
          </div>


        </div>
      </div>

      <div className='mt-10'>
        <CardDetails />
      </div>
      <div className="mt-10">
        <RelatedProduct />
      </div>
      <div className="mt-6 md:mt-10 lg:mt-16">
        <StoreBenfit />
      </div>
    </div>
  )
}

export default ProductDetails
