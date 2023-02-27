import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const filter = useSelector(state => state.filter)
    const { status, colors } = filter
    return (
        <div className="mt-2 text-gray-700 max-h-[300px] overflow-auto text-sm px-4 ">
            {!todos?.length && <div className="text-center text-yellow-500 font-bold text-lg">List is empty</div>}
            {todos
                .filter(todo => {
                    switch (status) {
                        case 'completed':
                            return todo.completed
                        case 'incompleted':
                            return !todo.completed
                        default:
                            return true
                    }
                })
                .filter(todo => {
                    if (colors.length) {
                        return colors.includes(todo?.color)
                    }
                    return true
                })
                .map(todo => <Todo todo={todo} key={todo.id} />)}
        </div>
    );
}
