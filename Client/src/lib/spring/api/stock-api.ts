

// const basePath = "https://finnhub.io/api/v1"
// const twelvedataBasePath = "https://api.twelvedata.com"

// export const searchStockSymbol = async (symbol: string) => {
//     const url = `${twelvedataBasePath}/symbol_search?symbol=${symbol}&apikey=${import.meta.env.VITE_TWELVEDATA_API_KEY}`
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error("Failed to search stock symbol");
//     }
//     return await response.json();
// }


// export const companyProfile = async (symbol: string) => {

//     const url = `${twelvedataBasePath}/profile?symbol=${symbol}&apikey=${import.meta.env.VITE_TWELVEDATA_API_KEY}`
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error("Failed to fetch company profile");
//     }
//     return await response.json();
// }


// export const priceQuote = async (symbol: string) => {
//     const url = `${twelvedataBasePath}/quote?symbol=${symbol}&apikey=${import.meta.env.VITE_TWELVEDATA_API_KEY}`
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error("Failed to fetch price quote");
//     }
//     return await response.json();
// }


// export const getCandlestickData = async (symbol: string, interval = "1week", outputsize = 100) => {
//     const url = `${twelvedataBasePath}/time_series?symbol=${symbol}&apikey=${import.meta.env.VITE_TWELVEDATA_API_KEY}&interval=${interval}&outputsize=${outputsize}`
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error("Failed to fetch price quote");
//     }
//     return await response.json();
// }

