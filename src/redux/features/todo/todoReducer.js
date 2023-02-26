import { ADD, CLEAR_COMPLETED, COLOR, COMPLETE_ALL, DELETE, TOGGLE } from "./actionTypes";

const maxId = (state) => {
    return state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
}

const initialState = [
    {
        content: 'Learn Redux',
        id: 1,
        completed: false,
        color: 'green'
    },
    {
        content: 'Learn React',
        id: 2,
        completed: true,
    },
]


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [...state, { content: action.payload, id: maxId(state) + 1, completed: false }]
        case DELETE:
            return state.filter(todo => todo.id !== action.payload)
        case TOGGLE:
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
        case COLOR:
            return state.map(todo => todo.id === action.payload.id ? { ...todo, color: action.payload.color } : todo);
        case COMPLETE_ALL:
            return state.map(todo => {
                return { ...todo, completed: true }
            });
        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);
        default:
            return state
    }
}
export default todoReducer;