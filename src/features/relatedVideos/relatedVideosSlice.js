import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideos";


const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: '',
}

// async thunk functions 
export const fetchRelatedVideos = createAsyncThunk("relatedVideos/getRelatedVideos", async ({tags, id}) => {
    const videos = await getRelatedVideos({tags, id})
    return videos;
})

const relatedVideosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchRelatedVideos.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.relatedVideos = payload
            })
            .addCase(fetchRelatedVideos.rejected, (state, { error }) => {
                state.isLoading = false;
                state.relatedVideos = [];
                state.isError = true;
                state.error = error?.message;
            })
    }
})


export default relatedVideosSlice.reducer;