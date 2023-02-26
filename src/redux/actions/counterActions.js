import { DECREMENT, DYNAMIC_DECREMENT, DYNAMIC_INCREMENT, INCREMENT } from "./types"

export const increment = () => {
    return { type: INCREMENT }
}
export const decrement = () => {
    return { type: DECREMENT}
}


export const dynamicIncrement = (value) => {
    return { type: DYNAMIC_INCREMENT, payload: value }
}
export const dynamicDecrement = (value) => {
    return { type: DYNAMIC_DECREMENT, payload: value }
}