import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import fetchTodos from "./redux/thunk/fetchTodos";

function App() {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodos)
    }, [])
    return (
        <>
            <Navbar />
            <div className="grid place-items-center min-h-[calc(100vh-63px)] bg-blue-100 px-6 font-sans py-10">
                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white ">
                    <Header />
                    <hr className="mt-4" />
                    <TodoList />
                    <hr className="mt-4" />
                    <Footer />
                </div>
            </div>
            <Modal/>
        </>
    );
}

export default App;
