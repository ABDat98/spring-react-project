import { mockSearchResult } from '@/lib/spring/api/mock';
import React, { useContext, useState } from 'react'
import SearchResult from '@/components/shared/SearchResult';
import  {searchStockSymbol}  from '@/lib/spring/api/stock-api';
const SearchV1 = () => {

    const [input, setInput] = useState("");

    const [bestMatches, setBestMatches] = useState([]);

    const updateBestMatches = async () => {
        try {
            if (input) {
                const SearchResult = await searchStockSymbol(input);
                const result = SearchResult.data;
                setBestMatches(result);
            }
        } catch (error) {
            setBestMatches([]);
            console.log(error);
        }
    };

    const clear = () => {
        setInput("");
        setBestMatches([]);
    };

    return (
        <div
            className={`flex max-md:mt-5   border-2 rounded-md relative  ml-auto  w-full}`}
        >
            <input
                type="text"
                value={input}
                style={{ width: "20rem" }}
                className={` px-4 py-2 focus:outline-none rounded-md`}
                placeholder="Search stock..."
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        updateBestMatches();
                    }
                }}
            />
            {input && (
                <button onClick={clear} className="m-1">
                    <img className="h-4 w-4 fill-gray-500" src="/assets/icons/XIcon.svg" alt="" />
                </button>
            )}
            <button
                onClick={updateBestMatches}
                className="h-8 w-8  rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 "
            >
                <img className="h-4 w-4 fill-gray-100" src="/assets/icons/search.svg" alt="" />

            </button>
            {input && bestMatches.length > 0 ? (
                <SearchResult results={bestMatches} />
            ) : null}
        </div>
    );
}

export default SearchV1
