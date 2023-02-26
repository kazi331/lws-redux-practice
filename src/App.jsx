import Counter from "./components/Counter";
import HookCounter from "./components/HookCounter";


export default function App() {
    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700 dark:bg-gray-800 dark:text-gray-200">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {/* <Counter title="My Counter" /> */}
                <HookCounter dynamic />
            </div>
        </div>
    );
}
