import { apiSlice } from "../api/apliSlice";
import { messagesApi } from "../messages/messagesApi";

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getConversations: builder.query({
            query: (email) => `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&page=1&_limit=${process.env.REACT_APP_CONVERSATIONS_LIMIT}`
        }),
        getConversation: builder.query({
            query: ({ userEmail, partnerEmail }) => `/conversations?participants=${userEmail}-${partnerEmail}&&participants=${partnerEmail}-${userEmail}`
        }),
        addConversation: builder.mutation({
            query: ({ sender, data }) => ({
                url: "/conversations",
                method: 'POST',
                body: data
            }),
            // silently add message
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                const conversation = await queryFulfilled;
                if (conversation?.data?.id) {
                    const users = args.data.users;
                    const sender = users.find(user => user.email === args.sender)
                    const receiver = users.find(user => user.email !== args.sender)
                    
                    // console.log(conversation.data.id)
                    // dispatch add message function
                    dispatch(messagesApi.endpoints.addMessage.initiate({
                        conversationId: conversation.data.id,
                        sender,
                        receiver,
                        message: args.data.message,
                        timestamp: args.data.timestamp
                    }))
                }

            }
        }),
        editConversation: builder.mutation({
            query: ({ id, data }) => ({
                url: `/conversations/${id}`,
                method: 'PATCH',
                body: data
            }),

            // silently add message
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                const conversation = await queryFulfilled;
                if (conversation?.data?.id) {
                    const users = args.data.users;
                    const sender = users.find(user => user.email === args.sender)
                    const receiver = users.find(user => user.email !== args.sender)

                    
                    // dispatch add message function
                    dispatch(messagesApi.endpoints.addMessage.initiate({
                        conversationId: conversation.data.id,
                        sender,
                        receiver,
                        message: args.data.message,
                        timestamp: args.data.timestamp
                    }))
                }

            }

        }),
    })
})

export const {
    useGetConversationsQuery,
    useGetConversationQuery,
    useAddConversationMutation,
    useEditConversationMutation
} = conversationsApi;