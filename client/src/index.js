import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import configureStore from './store/configure-store';
import { Provider } from 'react-redux';

import './vendor';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
