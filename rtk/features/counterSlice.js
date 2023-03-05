const { createSlice } = require('@reduxjs/toolkit')
const { dynamicActions } = require('./dynamicCounterSlice')

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        }
    },
    // old method
    /*  extraReducers: {
         ['dynamicCounter/increment']: (state, action) => {
             state.count+= action.payload
         }
     } */

     // builder method
    extraReducers: builder => {
        builder.addCase(dynamicActions.increment, (state, action) => {
            state.count += action.payload
        })
    }
})

module.exports = counterSlice.reducer
module.exports.counterActions = counterSlice.actions;