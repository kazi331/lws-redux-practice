const { log } = console
const store = require("./store");
const { counterActions } = require('./features/counterSlice');
const { dynamicActions } = require("./features/dynamicCounterSlice");

// subscribe
// store.subscribe(() => log({
//     counter: store.getState().counter.count,
//     dynamicCounter: store.getState().dynamicCounter.count
// }));

// dispatch function
store.dispatch(counterActions.increment())
store.dispatch(dynamicActions.increment(2))

