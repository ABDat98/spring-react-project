import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient()
export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        // we can use query clien in anywhere in app throw wrapping it use client provider 
        // let me allow access to all hook that react query provide us 
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

