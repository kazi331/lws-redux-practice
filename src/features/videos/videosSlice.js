import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosApi"

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: '',
}

// async thunk functions 
export const fetchVideos = createAsyncThunk("videos/getVideos", async () => {
    const videos = await getVideos();
    return videos;
})

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.videos = payload
            })
            .addCase(fetchVideos.rejected, (state, { error }) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = error?.message;
            })
    }
})


export default videosSlice.reducer;