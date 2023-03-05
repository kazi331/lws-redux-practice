const {configureStore} = require('@reduxjs/toolkit')
const { logger } = require('redux-logger')
const counterSlice = require('./features/counterSlice')
const dynamicCounterSlice = require('./features/dynamicCounterSlice')

const store = configureStore({
    reducer:{
        counter: counterSlice,
        dynamicCounter: dynamicCounterSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

module.exports = store