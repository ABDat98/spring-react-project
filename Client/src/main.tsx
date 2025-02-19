import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './lib/react-quey/QueryProvider';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import StockContext from './context/StockContext';
const element = document.getElementById('root');
ReactDOM.createRoot(element!).render(
    <QueryProvider>
        <AuthProvider>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </AuthProvider>
    </QueryProvider>



);

