import { combineReducers } from "redux";
import counterReducer from "./counter";
import dynamicCounter from "./dynamicCounter";

const rootReducer = combineReducers({
    dynamicCounter: dynamicCounter,
    counter: counterReducer,
})
export default rootReducer;