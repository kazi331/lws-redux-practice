import { useDispatch, useSelector } from "react-redux";
import { colorSelected, statusChanged } from "../redux/features/filter/actions";

const taskCounter = (no_of_task) => {
    switch (no_of_task) {
        case 0:
            return "No tasks left";
        case 1:
            return "1 task left";
        default:
            return `${no_of_task} tasks left`;
    }
}

export default function Footer() {
    const todos = useSelector(state => state.todos)
    const filter = useSelector(state => state.filter)
    const remaining = todos.filter(todo => !todo.completed).length
    const { status, colors } = filter;
    const dispatch = useDispatch()
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{taskCounter(remaining)}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={() => dispatch(statusChanged('all'))} className={`${status === 'all' && 'font-bold'} cursor-pointer`}>All</li>
                <li>|</li>
                <li onClick={() => dispatch(statusChanged('incompleted'))} className={`${status === 'incompleted' && 'font-bold'} cursor-pointer`}>Incomplete</li>
                <li>|</li>
                <li onClick={() => dispatch(statusChanged('completed'))} className={`${status === 'completed' && 'font-bold'} cursor-pointer`}>Complete</li>
                <li></li>
                <li></li>
                <li
                    onClick={() => dispatch(colorSelected('green'))}
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && "bg-green-500"}`}></li>
                <li
                    onClick={() => dispatch(colorSelected('red'))}
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && "bg-red-500"}`}></li>
                <li
                    onClick={() => dispatch(colorSelected('yellow'))}
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && "bg-yellow-500"}`}></li>
            </ul>
        </div>
    );
}
