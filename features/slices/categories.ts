import { apiSlice } from "./apiSlice";
const USER_URL = "/api";

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCatetegories: builder.mutation({
            query: (data) => {
                return {
                    url: `${USER_URL}/categories`,
                    method: "POST",
                    body: data
                }
            }
        }),




        fetchcategories: builder.query({
            query: () => ({
                url: `${USER_URL}/categories`
            })
        }),




    })
})

export const { useCreateCatetegoriesMutation, useFetchcategoriesQuery } = usersSlice