import { COLOR_SELECTED, STATUS_CHANGED } from "./actionTypes";


export const colorSelected = (color) => {
    return {
        type: COLOR_SELECTED,
        payload: color
    }
}
export const statusChanged = (status) => {
    return {
        type: STATUS_CHANGED,
        payload: status
    }
}