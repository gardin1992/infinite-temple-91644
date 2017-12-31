import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
//
import App from './containers/App'
import configureStore from './stores/index';

const store = configureStore({});

render(
    <Provider store={store}>
        <App title="Heroku Deploy"/>
    </Provider>,

    document.getElementById('root')
);
