import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './containers/App.js';
import reducer from "./reducers/reducer.js";
import { createStore } from "redux";
import { Provider } from 'react-redux'

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)