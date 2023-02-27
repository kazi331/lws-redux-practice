import { addTodo } from "../features/todo/actions";

const createTodo = (todoText) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:9000/todos', {
            method: "POST",
            body: JSON.stringify({text: todoText, completed: false}),
            headers: { "content-type": "application/json; charset=UTF-8" }
        })
        const data = await res.json();
        // dispatch actual action to reducer  
        dispatch(addTodo(data.text))
    }
}
export default createTodo;