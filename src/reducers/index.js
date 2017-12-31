import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const app = (state = {initialized: false, blog: false}, action) => {

    switch (action.type) {

        case 'APP_INITIALIZED':
            console.log(action);
            return state;

        default:
            return state;

    }

};

const entities = (state = {users: {}, repos: {}}, action) => {
    if (action.response && action.response.entities) {
        return state//merge({}, state, action.response.entities)
    }

    return state
};

const blog = (state = {posts: {}, postsIds: []}, action) => {

    switch (action.type) {

        case 'REQUEST_POSTS':
            return Object.assign({}, state, {posts: {id: 0, content: "<h2>Isso é um post"}});

        default:
            return state;
    }


};

function lastAction(state = null, action) {
    return action;
}

const rootReducers = combineReducers({
    app,
    lastAction,
    entities,
    blog,
    router: routerReducer
});

export default rootReducers;