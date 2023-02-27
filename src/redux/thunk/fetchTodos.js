import { loadTodos } from "../features/todo/actions";

const fetchTodos = async (dispatch) => {
    const res = await fetch('http://localhost:9000/todos');
    const data = await res.json();
    dispatch(loadTodos(data))
}
export default fetchTodos;