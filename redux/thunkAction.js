
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
// const { default: fetch } = require("node-fetch");


const initialState = {
    posts: [],
    loading: false,
    error: ''
}
// reducer
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'post/getStart':
            return {
                ...state,
                loading: true,
                error: ''
            }
        case 'post/success':
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }
        case 'post/failed':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: state
    }
}


// action creators
const loadStart = () => {
    return {
        type: 'post/getStart'
    }
}
const loadSuccess = (posts) => {
    return {
        type: 'post/success',
        payload: posts
    }
}
const loadFailed = (err) => {
    return {
        type: 'post/failed',
        payload: err
    }
}

// thunk function 
const getPosts = () => {
    return async (dispatch, getState) => {
        dispatch(loadStart())
        try {
            const res = await fetch('https://dummyjson.com/posts')
            const data = await res.json()
            dispatch(loadSuccess(data.posts))
        }
        catch (err) {
            dispatch(loadFailed(err.message))
        }

    }
}

// store 
const store = createStore(postReducer, applyMiddleware(thunk))


// subscribe 
store.subscribe(() => console.log(store.getState()))

// call the thunk function

store.dispatch(getPosts())