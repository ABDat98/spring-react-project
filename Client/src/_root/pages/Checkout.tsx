import ProcedCheckout from '@/components/shared/ProcedCheckout'
import React, { useEffect } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import { Checkbox } from '@radix-ui/react-checkbox';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from '@/components/ui/input';

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodObject } from "zod";
import { useState } from "react";
import { ChevronDown } from 'lucide-react';

// Zod Schemas for Each Form
const creditCardSchema = z.object({
    cardNumber: z.string().min(1, "Card Number is required"),
    cardHolderName: z.string().min(1, "Card Holder Name is required"),
    expiryDate: z.string().min(1, "Expiry Date is required"),
    cvv: z.string().min(1, "CVV is required"),
});

const payWhenReceivedSchema = z.object({
    firstName: z.string().min(3, "First Name is required"),
    lastName: z.string().min(3, "Last Name is required"),
    phone: z.string().min(9, "Phone Number is required"),
    country: z.string().min(4, "Country is required"),
    city: z.string().min(4, "City is required"),
    streetAddress: z.string().min(4, "Street Address is required"),
});

const Checkout = () => {
    const [selectedMethod, setSelectedMethod] = useState<"credit-card" | "pay-when-received" | null>(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const selectedSchema = selectedMethod === "credit-card"
        ? creditCardSchema
        : selectedMethod === "pay-when-received"
            ? payWhenReceivedSchema
            : z.object({});  // Empty schema if nothing is selected
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(selectedSchema),
        defaultValues: {} // Make sure it resets properly

    });
    const onSubmit: (data: any) => void = (data: any) => {
        if (!selectedMethod)
            return
        console.log("Form Data:", data);
        alert("Form submitted successfully!");
        setShowConfirmation(true); // Show the confirmation dialog

        reset();
    };

    useEffect(() => {
        reset({}, { keepDefaultValues: true });
    }, [selectedMethod, reset]);


    return (
        <div className='grid grid-flow-row gap-5'>
            <h1 className='text-lg md:text-xl lg:text-4xl font-mono'>Payment Method</h1>
            <div className=" grid md:grid-cols-12 gap-12 ">
                {/* Left: Table Section */}
                <div className="md:col-span-8 overflow-x-auto flex flex-col gap-4">
                    <span className=''>Select Payment Method</span>
                    <RadioGroup
                        className="space-y-3"
                        onValueChange={(value) => setSelectedMethod(value as any)}
                    >
                        {/* Credit Card Option */}
                        <Accordion type="single" collapsible defaultValue={'credit-card'}>
                            <AccordionItem value="credit-card">
                                <label className="flex items-center gap-3">
                                    <RadioGroupItem value="credit-card" />
                                    <span className='font-semibold text-lg'>                                        Credit Card
                                    </span>
                                </label>
                                <AccordionContent className='px-4'>
                                    {selectedMethod === "credit-card" && (
                                        <div className="space-y-4 mt-2">
                                            <Input
                                                placeholder="Card Number"
                                                {...register("cardNumber")}
                                            />
                                            {errors.cardNumber && (
                                                <p className="text-red text-sm">
                                                    {errors.cardNumber.message}
                                                </p>
                                            )}

                                            <Input
                                                placeholder="Card Holder Name"
                                                {...register("cardHolderName")}
                                            />
                                            {errors.cardHolderName && (
                                                <p className="text-red text-sm">
                                                    {errors.cardHolderName.message}
                                                </p>
                                            )}

                                            <div className="flex gap-4">
                                                <Input placeholder="MM/YY" {...register("expiryDate")} />
                                                {errors.expiryDate && (
                                                    <p className="text-red text-sm">
                                                        {errors.expiryDate.message}
                                                    </p>
                                                )}
                                                <Input placeholder="CVV" {...register("cvv")} />
                                                {errors.cvv && (
                                                    <p className="text-red text-sm">
                                                        {errors.cvv.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        {/* Pay When Received Option */}
                        <Accordion type="single" collapsible defaultValue={'pay-when-received'}>
                            <AccordionItem value="pay-when-received">
                                <label className="flex items-center gap-3">
                                    <RadioGroupItem value="pay-when-received" />

                                    <span className='font-semibold text-lg'>     Cash on delevery
                                    </span>
                                </label>
                                <AccordionContent className='px-4'>
                                    {selectedMethod === "pay-when-received" && (
                                        <div className="space-y-4 mt-2">
                                            <Input required placeholder="First Name" {...register("firstName")} />
                                            {errors.firstName && (
                                                <p className="text-red text-sm">
                                                    {errors.firstName.message}
                                                </p>
                                            )}

                                            <Input placeholder="Last Name" {...register("lastName")} />
                                            {errors.lastName && (
                                                <p className="text-red text-sm">
                                                    {errors.cardNumber?.message?.toString() ?? ""}
                                                    {errors.lastName.message}

                                                </p>
                                            )}

                                            <Input placeholder="Phone Number" {...register("phone")} />
                                            {errors.phone && (
                                                <p className="text-red text-sm">
                                                    {errors.phone.message}
                                                </p>
                                            )}

                                            <Input placeholder="Country" {...register("country")} />
                                            {errors.country && (
                                                <p className="text-red text-sm">
                                                    {errors.country.message}
                                                </p>
                                            )}

                                            <Input placeholder="City" {...register("city")} />
                                            {errors.city && (
                                                <p className="text-red text-sm">
                                                    {errors.city.message}
                                                </p>
                                            )}

                                            <Input
                                                placeholder="Street Address"
                                                {...register("streetAddress")}
                                            />
                                            {errors.streetAddress && (
                                                <p className="text-red text-sm">
                                                    {errors.streetAddress.message}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </RadioGroup>



                </div>


                {/* Right: Summary Section */}
                <div className='md:col-span-4 md:h-fit md:sticky md:top-10    '>
                    <ProcedCheckout handleSubmit={handleSubmit(onSubmit)} selectedMethod={selectedMethod} />


                </div>

            </div>

            <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                <DialogContent className='bg-light-1'>
                    <DialogHeader>
                        <DialogDescription>
                            <div className="flex flex-col gap-3 items-center">
                                <img src="/assest/icons/delete.svg" width={40} alt="" />
                                <span className='text-lg md:text-xl lg:text-2xl font-bold  font-inter'>Your Order Confirmed</span>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus laboriosam in veritatis a molestias vel tempora harum labore voluptates nesciunt atque soluta ex, officiis ullam quia debitis voluptate itaque nobis.</p>

                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <Button className='w-full' size={'lg'}> View Order</Button>
                                <Button className='w-full' variant={'outline'} size={'lg'}> Back To  Home</Button>

                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


        </div>
    )
}

export default Checkout
