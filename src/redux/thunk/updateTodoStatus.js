import { toggleTodo } from "../features/todo/actions";

const updateTodoStatus = ({ id, completed }) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                completed: !completed
            })
        })
        const data = await res.json();
        dispatch(toggleTodo(data.id))
    }
}
export default updateTodoStatus;