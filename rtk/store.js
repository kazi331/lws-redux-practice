const {configureStore} = require('@reduxjs/toolkit')
const counterSlice = require('./features/counterSlice')

const store = configureStore({
    reducer:{
        counter: counterSlice
    }
})

module.exports = store