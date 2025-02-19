import Filters from '@/components/catagories/Filters'
import ProductCards from '@/components/catagories/ProductCards';
import StoreBenfit from '@/components/catagories/StoreBenfit';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const Products = () => {

    const [filters, setFilters] = useState({
        categories: [],
        colors: [],
        sizes: [],
        price: [0, 2000],
    });
    const [cards, setCards] = useState([]);

    // Function to fetch cards based on filters
    const fetchCards = async (activeFilters: any) => {
        try {
            const queryParams = new URLSearchParams();
            Object.entries(activeFilters).forEach(([key, value]) => {
                if (Array.isArray(value) && value.length > 0) {
                    queryParams.append(key, value.join(","));
                } else if (!Array.isArray(value)) {
                    queryParams.append(key, String(value));
                }
            });

            const response = await fetch(`/api/cards?${queryParams.toString()}`);
            const data = await response.json();
            setCards(data);
        } catch (error) {
            console.error("Error fetching cards:", error);
        }
    };

    // Effect to call API when filters change
    useEffect(() => {
        fetchCards(filters);
    }, [filters]); // Only triggers when filters change

    return (
        <div className='grid grid-flow-row gap-5'>
            <div className='flex '>
                <span>Shop -  All products</span>
            </div>
            <div className="grid grid-cols-5 gap-6 ">
                <Filters setFilters={setFilters} />

                <div className='col-span-4 px-2'>


                    <div className="cards h-full">
                        <ProductCards />
                    </div>
                </div>
            </div>
            <div className="mt-6 md:mt-10 lg:mt-16">
                <StoreBenfit />
            </div>
        </div>
    )
}

export default Products
