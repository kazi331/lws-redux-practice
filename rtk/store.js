const {configureStore} = require('@reduxjs/toolkit')
const { logger } = require('redux-logger')
const counterSlice = require('./features/counterSlice')
const dynamicCounterSlice = require('./features/dynamicCounterSlice')
const postSlice = require('./features/postsSlice')

const store = configureStore({
    reducer:{
        counter: counterSlice,
        dynamicCounter: dynamicCounterSlice,
        posts: postSlice
    },
    middleware: getDefaultMiddleware => {
        // console.log('middlewares', getDefaultMiddleware()).concat(logger)
        return getDefaultMiddleware().concat()
    }
})

module.exports = store