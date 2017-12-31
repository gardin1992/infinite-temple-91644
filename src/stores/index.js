import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
//
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'

//
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(middleware)
);

export default configureStore