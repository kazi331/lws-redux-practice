import { apiSlice } from "../api/apliSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // endpoints here

        // register: builder.mutation({
        //     query: (user) => ({
        //         url: '/register',
        //         method: 'POST',
        //         body: user
        //     }),
        //     async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        //         try {
        //             const result = await queryFulfilled;

        //             // set user data to localstorage
        //             localStorage.setItem("auth", JSON.stringify({
        //                 accessToken: result.data.accessToken,
        //                 user: result.data.user
        //             }))

        //             // dispatch to update redux store
        //             dispatch(userLoggedIn({
        //                 accessToken: result.data.accessToken,
        //                 user: result.data.user
        //             }))
        //         } catch (error) { }
        //     }
        // }),

        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),

        login: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify(result.data))
                    dispatch(userLoggedIn(result.data))

                } catch (error) {
                    // console.log('error login', error);
                }
            }
        }),


    })
})

export const { useRegisterMutation, useLoginMutation } = authApi;