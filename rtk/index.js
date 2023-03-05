const { log } = console
const store = require("./store");
const {counterActions} = require('./features/counterSlice')

// subscribe
store.subscribe(() => log(store.getState().counter));

// dispatch function
store.dispatch(counterActions.increment())
store.dispatch(counterActions.decrement())
store.dispatch(counterActions.increment())
store.dispatch(counterActions.decrement())
store.dispatch(counterActions.increment())



log(store.getState().counter)
