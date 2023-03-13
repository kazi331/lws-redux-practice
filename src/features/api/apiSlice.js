import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "videosApi", // optional
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    // keepUnusedDataFor: 5, // for all endpoints
    endpoints: (builder) => ({
        getVideos: builder.query({
            // query: "/videos",
            query: () => "/videos", // used callback function for getting params later on
            // keepUnusedDataFor: 5, // refetch after 5 sec ,  for specific endpoint
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`
        }),
        getRelatedVideos: builder.query({
            query: ({ id, title }) => {
                const likes = title.split(" ").map(tag => `title_like=${tag}`).join("&")
                const queryString = `/videos?${likes}&_limit=5&id_ne=${id}`
                return queryString
            }
        }),
        // post video
        addVideo: builder.mutation({
            query: (data) => ({
                url: '/videos',
                method: "POST",
                body: data,
            })
        })

    })
})

// export api hooks
export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation
} = apiSlice;