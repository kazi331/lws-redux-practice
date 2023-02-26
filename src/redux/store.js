import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./features/rootReducer";
import myLogger from './middlewares/logger';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger)));

export default store;