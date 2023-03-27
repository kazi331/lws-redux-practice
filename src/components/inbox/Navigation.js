import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/lws-logo-dark.svg";
import { userLoggedOut } from "../../features/auth/authSlice";

export default function Navigation() {
    const {name} = useSelector(state => state.auth.user) || {}
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(userLoggedOut())
        // localStorage.removeItem("auth")
    }
    return (
        <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/">
                        <img
                            className="h-10"
                            src={logoImage}
                            alt="Learn with Sumit"
                        />
                    </Link>
                    <ul>
                        <li className="text-white flex">
                            <button onClick={logout} className="cursor-pointer  px-2 border rounded">Logout</button>
                            <p className="ml-2">{name}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
