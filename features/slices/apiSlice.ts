import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getData } from '../../utils/asyncStorage'
export const bURl = "https://60f4-102-0-0-245.ngrok-free.app"
const getAuth = async () => {
    return await getData("token")

}
const baseQuery = fetchBaseQuery({
    baseUrl: bURl,
    headers: { Authorization: `Bearer ${getAuth}` },
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})