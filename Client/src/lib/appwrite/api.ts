// import { INewUser } from "@/types";
// import { account, appwriteConfig, avatars, databases } from "./config";
// import { Databases, ID, Query } from "appwrite";
// import { error } from "console";
// export async function createUserAcount(user: INewUser) {
//     try{
//         const newAccount = await account.create(
//             ID.unique(),
//             user.email,
//             user.password,
//             user.name
//         )
//         if(!newAccount) throw Error;
//         const avatarUrl = avatars.getInitials(user.name)
//         const newUser = await saveUserToDB({
//             accountId: newAccount.$id,
//             email: newAccount.email,
//             name: newAccount.name,
//             imageUrl : avatarUrl,
//             username: user.username 
//         })
//         return newUser;
//     } catch(error) {
//         console.log(error)
//         return error;
//     }

// }

// export async function saveUserToDB(user:{
//     accountId: string,
//     email: string,
//     name: string,
//     imageUrl : URL,
//     username?: string 
// }) {
//     try {
//         const newUser = await databases.createDocument(appwriteConfig.databasesId, 
//             appwriteConfig.userCollcectionId,
//             ID.unique(),
//             user
//             )
//             return newUser;

//     } catch(error) {
//         console.log(error)
//     }
    
// }

// export async function singInAccount(user:{
//     email: string,
//     password: string,
// }) {
//     try {
//         const session = await account.createSession(user.email,user.password)
//         return session;
//     } catch(error) {
//         console.log(error)
//     }
    
// }

// export async function getCurrentUser(){
//     try {
//         const currentAccount = await account.get()
//         if(!currentAccount) {
//             throw Error
//         }
        
//         const userList = await databases.listDocuments(
//             appwriteConfig.databasesId,
//             appwriteConfig.userCollcectionId,
//         )
//         const currentUser = userList.documents.find((document) => document.accountId == currentAccount.$id )
        
//         if(!currentUser) throw Error;
//         return currentUser

//     } catch (error) {
//          console.log(error)
//     }

// }

// export async function signOutAccount(){
//     try {
//         const session = account.deleteSession("current")
//         return session;
//     } catch (error) {
//          console.log(error)
//     }

// }