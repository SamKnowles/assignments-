import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'react-redux';

import App from './Components/App';

const store = createStore(
    reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);