import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { clearCompleted, completeAll } from "../redux/features/todo/actions";
import createTodo from "../redux/thunk/createTodo";

export default function Header() {
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(createTodo(content));
                    setContent('')
                }}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`} style={{ backgroundImage: `url(${plusImage})` }}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    onClick={() => dispatch(completeAll())}
                    className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li
                    onClick={() => dispatch(clearCompleted())}
                    className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
