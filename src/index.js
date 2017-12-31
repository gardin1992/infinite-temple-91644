import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

//
import 'material-components-web/dist/material-components-web.css';
import './demo.css';

import App from './containers/App';

import configureStore, {history} from './stores/index';

const store = configureStore({app: {initialized: true}});


render(
    <Provider store={store}>
        <ConnectedRouter history={history}>

            <App />

        </ConnectedRouter>
    </Provider>,

    document.getElementById('root')
);
