import { removeTodo } from "../features/todo/actions";

const deleteTodo = (id ) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            })
        const data = await res.json();
        dispatch(removeTodo(id))
    }
}
export default deleteTodo;