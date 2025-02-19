import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { count } from 'console'
import { Currency } from 'lucide-react'
import { number } from 'zod';

export type CompanyDetailsProps = {
    details: {
        name: string;
        country: string;
        currency: string;
        exchange: string;
        ipo: string;
        marketCapitalization: string;
        finnhubIndustry: string;
    };
};
const ComapnyDetails = ({ details }: any) => {
    const companyDetails = {
        name: "Company Name",
        country: "Country",
        type: "Type",
        sector: "Sector",
        address: "Address",
        exchange : "Exchange",
        CEO: "CEO",
        phone: "Phone",
    };
    

    return (
        <>
            <Card className='bg-light-1 border-none shadow-sm'>
                <CardHeader>
                    <CardTitle>Company Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='w-full flex flex-col justify-between  h-full  gap-4'>
                        {(Object.keys(companyDetails) as Array<keyof typeof companyDetails>
                        ).map((item) => {
                            return (
                                <li key={item} className='flex-1 flex items-center justify-between p-2 border-b-2 border-light-2'>
                                    <span>{companyDetails[item]}</span>
                                    <span className='text-end'>
                                        {details[item]}
                                    </span>
                                </li>
                            )

                        })
                        }

                    </ul>

                </CardContent>


            </Card>

        </>
    )
}

export default ComapnyDetails
