import { apiSlice } from "./apiSlice";
const USER_URL = "/api";

export const usersSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => {
                return {
                    url: `${USER_URL}/register`,
                    method: "POST",
                    body: data
                }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: "POST",
                body: data
            })
        }),


        editUserDetails: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data.user_id}`,
                method: "PUT",
                body: data
            })
        }),


        fetchuser: builder.query({
            query: (id) => ({
                url: `${USER_URL}/${id}`
            })
        }),



        deleteUser: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data._id}`,
                method: "DELETE",
            })
        })
    })
})

export const { useDeleteUserMutation, useLoginMutation, useEditUserDetailsMutation, useRegisterMutation, useFetchuserQuery } = usersSlice