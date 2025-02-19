import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input';

interface ProcedCheckoutProps {
    handleSubmit: () => void;
    selectedMethod:string | null
}

const ProcedCheckout: React.FC<ProcedCheckoutProps> = ({ handleSubmit ,selectedMethod}) => {
    const [code, setCode] = useState("");

    const applyDiscount = () => {
        if (code.trim() === "") {
            alert("Please enter a discount code.");
            return;
        }
        console.log("Applying discount code:", code);
        // Add your discount logic here
    };
    return (
        <Card className="w-full ">
            <CardHeader className='border-b'>
                <CardTitle>
                    <div className='flex justify-between'>
                        <span className='font-semibold text-md'> Subtotal</span>
                        <span className='font-semibold text-md'> $200.00</span>

                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className='border-b py-4'>
                <div className="flex flex-col gap-4">
                    <div>
                        <span className='text-sm'>Enter Discount Code</span>
                        <div className="flex items-center gap-2 mt-2">
                            <Input
                                type="text"
                                placeholder="Enter discount code"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="w-full"
                            />
                            <Button onClick={applyDiscount}>Apply</Button>
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <span>Delivery Charge</span>
                        <span>$5.00</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='py-4'>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <span className='font-semibold text-md'> Grand Total</span>
                        <span className='font-semibold text-md'> $205.00</span>

                    </div>
                    <div className='w-full'>
                        <Button   disabled={!selectedMethod}   onClick={handleSubmit} className='w-full' size={'lg'}>Place Order</Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProcedCheckout
