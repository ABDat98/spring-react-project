import { createContext, useCallback, useContext, useEffect, useState } from "react";
interface StockContextType {
    stockSymbol: string;
    setStockSymbol: (symbol: string) => void;
  }
  
const StockContext = createContext<StockContextType | undefined>(undefined);
export default StockContext;