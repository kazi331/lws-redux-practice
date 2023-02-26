import rootReducer from "../features/rootReducer"

const myLogger = (state) => (next) => (action) => {
    console.log(`%c Before: %c${JSON.stringify(state.getState())}`, 'color: #0ba6de; font-size: 16px', 'color: crimson; font-size: 16px')
    console.log(`%c Acton: ${JSON.stringify(action)}`, 'color: lightblue; font-size: 130%')
    const upComingState = [action].reduce(rootReducer, state.getState())
    console.log(`%c UpComingState: ${JSON.stringify(upComingState)}`, 'color: #0ba6de; font-size: 16px')
    next(action)
    // console.log(`%c After: ${JSON.stringify(state.getState())}`, 'color: #06cf32; background-image: linear-gradient(to right, green, blue); font-size: 130%')
}


export default myLogger;