import { connect } from "react-redux";
import { decrement, increment } from "../redux/actions/counterActions";

function Counter({ count, increment, decrement, title }) {

    
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white text-gray-700 dark:text-gray-200 dark:bg-gray-700 rounded shadow">
            <h2>{title}</h2>
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3 gap-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => increment()}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrement()}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

// old way of redux
// send state and dispatch function as props in component
const mapStateToProps = (state, ownProps) => {
    return {
        count: state.count, 
        title: ownProps.title + " Props"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);