const logger = (store) => (next) => (action) => {
    console.log('action', action);
    console.log('store', store.getState());
    next(action);
}
export default logger;