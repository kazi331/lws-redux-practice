import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoApi"

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: '',
}

// async thunk functions 
// export const fetchVideo = createAsyncThunk("video/getVideo", async (id) => {
//     const videos = await getVideo(id);
//     return videos;
// })
export const fetchVideo = createAsyncThunk("video/getVideo", getVideo)

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.video = payload
            })
            .addCase(fetchVideo.rejected, (state, { error }) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = error?.message;
            })
    }
})


export default videoSlice.reducer;