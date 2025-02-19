import React, { useState } from 'react'

interface QuantitySelectorProps {
    initialQuantity?: number;
    onChange?: (quantity: number) => void;
    min?: number;
    max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
    initialQuantity = 1,
    onChange,
    min = 1,
    max,
}) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const handleDecrement = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onChange && onChange(newQuantity);
        }
    };

    const handleIncrement = () => {
        if (!max || quantity < max) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onChange && onChange(newQuantity);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= min && (!max || value <= max)) {
            setQuantity(value);
            onChange && onChange(value);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={handleDecrement}
                disabled={quantity <= min}
                className="w-4 h-4 md:w-8 md:h-8 flex items-center justify-center border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                –
            </button>
            <input
                type="number"
                value={quantity}
                onChange={handleChange}
                className="w-6 md:w-12 text-center border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
                min={min}
                max={max}
            />
            <button
                onClick={handleIncrement}
                disabled={max ? quantity >= max : false}
                className="w-4 h-4 md:w-8 md:h-8 flex items-center justify-center border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;
