import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getData } from '../../utils/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const bURl = "https://895b-105-161-91-181.ngrok-free.app"

const getAuth = async (): Promise<string | null> => {
    try {
        let t = await AsyncStorage.getItem("token");
        return `${t}`; // Return the retrieved token
    } catch (error) {
        console.error('Error fetching auth token:', error);
        throw error; // Rethrow the error to handle it further up the call stack if needed
    }
}

const baseQuery = fetchBaseQuery({
    baseUrl: bURl,
    prepareHeaders: async (headers) => {
        let token = await getAuth()
        headers.set('Authorization', `Bearer ${token}`)
    
        return headers;
    },
})


export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})