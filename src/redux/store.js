import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from "redux";
import filterReducer from "./features/filter/filterReducer";
import todoReducer from "./features/todo/todoReducer";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;