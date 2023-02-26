import { connect } from "react-redux";
import { decrement, dynamicDecrement, dynamicIncrement, increment } from "../redux/actions/counterActions";

function HookCounter({ count, increment, decrement }) {

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white text-gray-700 dark:text-gray-200 dark:bg-gray-700 rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3 gap-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => increment(10)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrement(2)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic ? state.dynamicCounter.count : state.counter.count
    }
}
const mapDispatchToProps = (dispatch, myProps) => {
    return {
        increment: (value) => dispatch(myProps.dynamic ? dynamicIncrement(value) : increment()),
        decrement: (value) => dispatch(myProps.dynamic ? dynamicDecrement(value) : decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HookCounter)