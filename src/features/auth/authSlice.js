import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: undefined,
    user: undefined,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // actions here
        userLoggedIn(state, { payload }) {
            state.accessToken = payload.accessToken
            state.user = payload.user
        },
        userLoggedOut(state) {
            state.accessToken = undefined
            state.user = undefined
        },
    }
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions
export default authSlice.reducer;