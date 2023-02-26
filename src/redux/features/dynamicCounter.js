import { DYNAMIC_DECREMENT, DYNAMIC_INCREMENT } from "../actions/types";

const initialState = {
    count: 10,
}

const dynamicCounter = (state = initialState, action) => {
    switch (action.type) {
        case DYNAMIC_INCREMENT:
            return { ...state, count: state.count + action.payload }
        case DYNAMIC_DECREMENT:
            return { ...state, count: state.count - action.payload }
        default: return state;
    }
}



export default dynamicCounter;