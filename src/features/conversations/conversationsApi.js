import { apiSlice } from "../api/apliSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getConversations: builder.query({
            query: (email) => `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_LIMIT}`
        })
    })
})

export const {useGetConversationsQuery} = authApi;