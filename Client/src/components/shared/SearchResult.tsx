import React, { useContext } from 'react'
import StockContext from '../../context/StockContext';
const SearchResult = ({ results }: any) => {
    const stockContext = useContext(StockContext);
    if (!stockContext) {
        throw new Error("SearchResult must be used within a StockContext.Provider");
    }
    const { stockSymbol, setStockSymbol } = stockContext;
    return (
        <ul
            className={`absolute z-50 top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-light-1 border-neutral-200 `}
        >
            {results.map((item: any, index:number) => {
                return (
                    <li
                        key={index}
                        className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-primary transition duration-300`}
                        onClick={() => setStockSymbol(item.symbol)}
                    >
                        <span>{item.symbol}</span>
                        <span  className='whitespace-nowrap'>{item.instrument_name}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default SearchResult
