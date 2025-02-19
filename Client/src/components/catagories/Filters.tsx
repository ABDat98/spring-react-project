import { useState, useEffect } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";
import { ChevronDown } from "lucide-react";

// Define types for props
interface FilterProps {
    setFilters: (filters: any) => void;
}

const Filters: React.FC<FilterProps> = ({ setFilters }) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

    const categories = ["Shirts", "Pants", "Shoes", "Hats"];
    const sizes = ["S", "M", "L", "XL"];
    const colors = [
        { name: "Red", value: "red", color: "bg-red-500" },
        { name: "Green", value: "green", color: "bg-green-500" },
        { name: "Blue", value: "blue", color: "bg-blue-500" },
    ];

    // Handlers for filters
    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) => {
            const newCategories = prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category];

            setFilters((prevFilters: any) => ({ ...prevFilters, categories: newCategories }));
            return newCategories;
        });
    };

    const handleColorChange = (colors: string[]) => {
        setSelectedColors(colors);
        setFilters((prevFilters: any) => ({ ...prevFilters, colors }));
    };

    const handleSizeChange = (size: string) => {
        setSelectedSizes((prev) => {
            const newSizes = prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size];

            setFilters((prevFilters: any) => ({ ...prevFilters, sizes: newSizes }));
            return newSizes;
        });
    };

    const handlePriceChange = (value: [number, number]) => {
        setPriceRange(value);
        setFilters((prevFilters: any) => ({ ...prevFilters, price: value }));
    };


    return (
        <div>
            <Accordion type="multiple" defaultValue={['item-1', 'item-2', 'item-3', 'item-4']}>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="">Product Categories                                               <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2">
                            {categories?.map((item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input
                                        className="w-4 h-4 accent-primary border-8"
                                        type="checkbox"
                                        checked={selectedCategories.includes(item)}
                                        onChange={() => handleCategoryChange(item)}
                                    />
                                    <span className="text-lg font-sans">{item}</span>
                                </label>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Filter By Price                                                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-5">
                            <span>Price: ${priceRange[0]} - ${priceRange[1]} USD</span>
                            <Slider
                                value={priceRange}
                                onValueChange={handlePriceChange}
                                min={0}
                                max={2000}
                                step={100}
                                className="w-full"
                            />
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Filter By Color                                               <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent>
                        <ToggleGroup
                            type="multiple"
                            className="flex items-start p-1 flex-col gap-2"
                            value={selectedColors}
                            onValueChange={handleColorChange}
                        >
                            {colors?.map((color) => (
                                <div key={color.value} className="flex items-center gap-2">
                                    <ToggleGroupItem
                                        value={color.value}
                                        className={`rounded-md border border-gray-300 ${color.color} 
                     ${selectedColors.includes(color.value) ? "ring-1 ring-primary" : ""}`}
                                    />
                                    <span className="text-lg font-sans">{color.name}</span>
                                </div>
                            ))}
                        </ToggleGroup>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Filter By Size                                               <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col gap-2">
                            {sizes?.map((size) => (
                                <label key={size} className="flex items-center gap-3">
                                    <input
                                        className="w-4 h-4 accent-primary border-8"
                                        type="checkbox"
                                        checked={selectedSizes.includes(size)}
                                        onChange={() => handleSizeChange(size)}
                                    />
                                    <span className="text-lg font-mono">{size}</span>
                                </label>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Filters;
