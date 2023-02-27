import { toggleColor, toggleTodo } from "../features/todo/actions";

const updateTodoColor = ({ id, color }) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                color: color
            })
        })
        const data = await res.json();
        dispatch(toggleColor(data.id, data.color))
    }
}
export default updateTodoColor;