import { ADD, CLEAR_COMPLETED, COLOR, COMPLETE_ALL, DELETE, LOAD_TODOS, TOGGLE } from "./actionTypes"

export const loadTodos = (todos) => {
    return {
        type: LOAD_TODOS,
        payload: todos
    }
}
export const addTodo = (content) => {
    return {
        type: ADD,
        payload: content
    }
}
export const removeTodo = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}
export const toggleTodo = (id) => {
    return {
        type: TOGGLE,
        payload: id
    }
}
export const toggleColor = (id, color) => {
    return {
        type: COLOR,
        payload: { id, color }
    }
}
export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    }
}
export const completeAll = () => {
    return {
        type: COMPLETE_ALL,
    }
}