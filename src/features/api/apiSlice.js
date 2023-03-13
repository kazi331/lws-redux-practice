import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "videosApi", // optional
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    // keepUnusedDataFor: 5, // for all endpoints
    tagTypes: ["videos", "vidoe", "relatedVideos"],
    endpoints: (builder) => ({
        getVideos: builder.query({
            // query: "/videos",
            query: () => "/videos", // used callback function for getting params later on
            // keepUnusedDataFor: 600, // refetch after 5 sec ,  for specific endpoint
            providesTags: ["videos"]
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`,
            providesTags: (result, error, arg) => [{ type: "video", id: arg }]
        }),
        getRelatedVideos: builder.query({
            query: ({ id, title }) => {
                const likes = title.split(" ").map(tag => `title_like=${tag}`).join("&")
                const queryString = `/videos?${likes}&_limit=4&id_ne=${id}`
                return queryString
            },
            providesTags: (result, error, arg) => [{ type: "relatedVideos", id: arg.id }]
        }),
        // post video
        addVideo: builder.mutation({
            query: (data) => ({
                url: '/videos',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["videos"]
        }),
        // update video
        updateVideo: builder.mutation({
            query: (data) => ({
                url: `/videos/${data.id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => {
                return [
                    "videos",
                    { type: "relatedVideos", id: arg.id },
                    { type: "video", id: arg },
                ]
            }
        }),
        // delete video 
        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["videos"]
        })


    })
})

// export api hooks
export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetRelatedVideosQuery,
    useAddVideoMutation,
    useUpdateVideoMutation, 
    useDeleteVideoMutation
} = apiSlice;