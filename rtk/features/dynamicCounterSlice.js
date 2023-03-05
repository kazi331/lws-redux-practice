const { createSlice } = require("@reduxjs/toolkit")



const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState: {count: 5},
    reducers: {
        increment: (state, action) => {
            state.count += action.payload
        },
        decrement: (state, action) => {
            state.count -= action.payload
        },
    }
})

module.exports = dynamicCounterSlice.reducer
module.exports.dynamicActions = dynamicCounterSlice.actions