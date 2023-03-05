const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
    posts: [],
    loading: false,
    error: ''
}

// create async thunk functions 
const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json();
    return data.posts
})


// slice
const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.error = ''
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.error = '';
                state.loading = false;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.posts = [];
                state.loading = false;
                state.error = action.error.message
            })
    }
});

module.exports = postSlice.reducer
module.exports.getPosts = getPosts