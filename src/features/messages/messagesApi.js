import { apiSlice } from "../api/apliSlice";

export const messagesApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMessages: builder.query({
            query: (id) => `/messages?conversationId=${id}&_sort=timestamp&_order=desc&page=1&_limit=${process.env.REACT_APP_MESSAGES_LIMIT}`
        }),
        addMessage: builder.mutation({
            query: (data) => ({
                url: "/messages",
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useGetMessagesQuery } = messagesApi;