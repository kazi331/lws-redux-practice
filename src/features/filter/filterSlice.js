import { createSlice } from "@reduxjs/toolkit"



const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        tags: [],
        search: "",
    },
    reducers: {
        tagSelected: (state, { payload }) => {
            state.tags.push(payload)
        },
        tagRemoved: (state, { payload }) => {
            const tagToRemove = state.tags.indexOf(payload);
            if (tagToRemove !== -1) {
                state.tags.splice(tagToRemove, 1)
            }
        },
        searched: (state, { payload }) => {
            state.search = payload
        }
    },
});
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;
export default filterSlice.reducer;