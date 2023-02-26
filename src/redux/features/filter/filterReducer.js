import { COLOR_SELECTED, STATUS_CHANGED } from "./actionTypes";

const initialState = {
    status: "all",
    colors: [],
};
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CHANGED:
            return { ...state, status: action.payload };

        case COLOR_SELECTED:
            if (!state.colors.includes(action.payload)) {
                return { ...state, colors: [...state.colors, action.payload] };
            }
            if (state.colors.includes(action.payload)) {
                return { ...state, colors: state.colors.filter(c => c !== action.payload) };
            }
            return state;
        default:
            return state;
    }
}
export default filterReducer;