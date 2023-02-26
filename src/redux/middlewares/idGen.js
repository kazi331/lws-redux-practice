import { ADD } from "../features/todo/actionTypes";

const idGen = (store) => (next) => (action) => {
    if (action.type === ADD) {
        const newAction = {
            ...action,
            payload: { todo: action.payload, id: Math.random().toString(36).substring(2, 9), completed: false, color: '' },
        };
        console.log('newAction: ', newAction);
        next(newAction);
    }
    next(action);
}

export default idGen;
