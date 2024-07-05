import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getData } from '../../utils/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const bURl = "https://bd35-102-0-0-242.ngrok-free.app"
// const getAuth = async () => {
//     // let v = await AsyncStorage.getItem("token")
//     return await AsyncStorage.getItem("token")

// }
let Token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzIwMjAxMzc2LCJleHAiOjE3MjAyMzczNzZ9.JHBiQUNAZdvx2ZS6iOK9Cmi4jmu9HshJ0uZVZ5x-Nes"

const getAuth = async (): Promise<string | null> => {
    try {
        let t = await AsyncStorage.getItem("token");

        // Token = t ? t : ""
        return Token; // Return the retrieved token
    } catch (error) {
        console.error('Error fetching auth token:', error);
        throw error; // Rethrow the error to handle it further up the call stack if needed
    }
}
getAuth()

const baseQuery = fetchBaseQuery({
    baseUrl: bURl,
    headers: { Authorization: `Bearer ${Token}` },
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})