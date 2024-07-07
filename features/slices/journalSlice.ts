import { apiSlice } from "./apiSlice";
const USER_URL = "/api/journals";

export const journalApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        post: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}`,
                method: "POST",
                body: data
            })
        }),
        edit: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data.id}`,
                method: "PUT",
                body: data
            })
        }),
        delete: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/delete/${data.id}`,
                method: "PUT",
                body: data
            })
        }),
        get: builder.query({
            query: (data) => `${USER_URL}?startedDate=${data.startedDate}&endDate=${data.endDate}`
        }),
        getSingle: builder.query({
            query: (id) => `${USER_URL}/${id}`
        }),
    })
})

export const {useDeleteMutation,useEditMutation,useGetQuery,usePostMutation,useGetSingleQuery  } = journalApiSlice