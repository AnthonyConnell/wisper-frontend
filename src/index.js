import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';
import './index.css';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);