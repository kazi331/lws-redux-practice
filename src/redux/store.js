import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from "redux";
import filterReducer from "./features/filter/filterReducer";
import todoReducer from "./features/todo/todoReducer";


const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
})
const store = createStore(rootReducer, composeWithDevTools());

export default store;