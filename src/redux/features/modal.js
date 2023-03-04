const modal = (state = { open: false }, action) => {
    if (action.type === 'OPEN') {
        return { open: true }
    } else if (action.type === 'CLOSE') {
        return { open: false }
    } else {
        return state
    }
}
export default modal;

export const openModal = () => {
    return {type: 'OPEN'}
}
export const closeModal = () => {
    return {type: 'CLOSE'}
}