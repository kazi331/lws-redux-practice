const { log } = console
require('util').inspect.defaultOptions.depth = null; // for not showing object object in console
const store = require("./store");
const { counterActions } = require('./features/counterSlice');
const { dynamicActions } = require("./features/dynamicCounterSlice");
const { getPosts } = require("./features/postsSlice");

// subscribe
store.subscribe(() => log(store.getState().posts));

// dispatch function
// store.dispatch(counterActions.increment())
// store.dispatch(dynamicActions.increment(2))
store.dispatch(getPosts())

