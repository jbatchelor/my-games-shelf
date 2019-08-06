import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./containers/App";
import './styles/index.scss';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <App/>
        </Provider>
    </BrowserRouter>,
    document.querySelector("#root")
);