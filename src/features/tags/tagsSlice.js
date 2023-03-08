import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagsApi"

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: '',
}

// async thunk functions 
export const fetchTags = createAsyncThunk("tags/getTags", getTags)

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTags.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.tags = payload
            })
            .addCase(fetchTags.rejected, (state, { error }) => {
                state.isLoading = false;
                state.tags = [];
                state.isError = true;
                state.error = error?.message;
            })
    }
})


export default tagsSlice.reducer;