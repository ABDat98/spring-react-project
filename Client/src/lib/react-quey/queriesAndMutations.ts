import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery
} from "@tanstack/react-query"
import { registerUser,  loginUser, logout} from "../spring/api/api"


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

export const useLogin = ()=> {
    return useMutation({
        mutationFn: (user:{
            email:string,
            password:string
        })=> loginUser(user)
    })
}