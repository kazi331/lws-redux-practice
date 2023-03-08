import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/lws.svg'
import searchIcon from '../assets/search.svg'
import { searched } from '../features/filter/filterSlice'

const Navbar = () => {
    const { search } = useSelector(state => state.filter)
    const [input, setInput] = useState(search)
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searched(input))
    }
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
                <Link to="/" >
                    <img
                        className="h-10"
                        src={logo}
                        alt="Learn with Sumit"
                    />
                </Link>
                <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">

                    <form onSubmit={handleSubmit}>
                        <input
                            className="outline-none border-none mr-2"
                            type="search"
                            name="search"
                            placeholder="Search"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                    </form>
                    <img
                        className="inline h-4 cursor-pointer"
                        src={searchIcon}
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar