import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery
} from "@tanstack/react-query"
import { registerUser,  loginUser, logout, fetchUserByToken} from "../spring/api/api"


import {  IRegisterUser } from "@/types"

export const useSignOutAccount = ()=> {
    return useMutation({
        mutationFn: logout
    })
}

export const useRegisterAccount = ()=> {
    return useMutation({
        mutationFn: (user: IRegisterUser)=> {
            return registerUser(user)
        }
        })
}

export const useFetchUserByToken = () => {
 
    return useQuery({
        queryKey: ['fetchUserByToken'], // unique key for this query
        queryFn: fetchUserByToken,      // function to fetch user data based on token
        enabled: !!localStorage.getItem('token'), // Only run if token exists
        retry: false, // Disable retries if needed
    });
};

// Unique Key ('fetchUserByToken'):
// The first argument, 'fetchUserByToken', is a unique key to identify this query.
// This key lets react-query manage caching and refetching. When the key matches a query in the cache, react-query knows it can use the cached data or determine if it needs to refetch based on the configuration.



export const useLogin = ()=> {
    return useMutation({
        mutationFn: (user:{
            email:string,
            password:string
        })=> loginUser(user)
    })
}

// Why Use useQuery Instead of useMutation
// useQuery is for fetching or reading data that you might want to cache and retrieve without altering the server's state.
// useMutation is for operations that modify server data, such as creating, updating, or deleting resources (POST, PUT, DELETE requests).
// Caching: useQuery automatically caches results and refetches only if the cache is invalidated or when certain conditions are met. useMutation, on the other hand, does not cache results as it assumes the data changes.
// Automatic Refetching: useQuery can refetch data when it changes. For instance, in an authentication context, you might want to refetch user data when the token changes. useMutation doesn’t refetch because it’s focused on one-time actions.
