import { apiSlice } from "../api/apliSlice";

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getConversations: builder.query({
            query: (email) => `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_LIMIT}`
        }),
        getConversation: builder.query({
            query: ({ userEmail, partnerEmail }) => `/conversations?participants=${userEmail}-${partnerEmail}&&participants=${partnerEmail}-${userEmail}`
        }),
        addConversation: builder.mutation({
            query: (data) => ({
                url: "/conversations",
                method: 'POST',
                body: data
            }),
            async onQueryStarted() {

            }
        }),
        editConversation: builder.mutation({
            query: ({ id, data }) => ({
                url: `/conversations/${id}`,
                method: 'PATCH',
                body: data
            })
        }),
    })
})

export const {
    useGetConversationsQuery,
    useGetConversationQuery,
    useAddConversationMutation,
    useEditConversationMutation
} = conversationsApi;