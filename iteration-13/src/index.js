import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import { Provider } from 'react-redux';

import store from './store';
import './style.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, $('#root')[0]);