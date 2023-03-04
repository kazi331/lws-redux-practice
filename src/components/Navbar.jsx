import { useDispatch, useSelector } from "react-redux"
import { openModal } from "../redux/features/modal";

export default function Navbar() {
    const {open} = useSelector(state => state.modal)
    const dispatch = useDispatch();

    return (
        <div className="sticky top-0 left-0  text-center w-full header bg-indigo-500 py-4 text-white font-bold text-lg shadow-lg">
            <nav className="container mx-auto max-w-5xl flex items-center justify-between">
                <h2>Simple Todo Application with Redux</h2>
                <button onClick={() => dispatch(openModal())} className={`  border border-gray-200 px-4 rounded active:bg-indigo-600 `}>Open Modal</button>
            </nav>
        </div>
    );
}
