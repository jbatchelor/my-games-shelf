import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./Components/App";

import rootReducer from './Games/Games-Reducers';
import gamesWatcher from './Games/Games-Sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(gamesWatcher);

ReactDOM.render(
    <Provider store={configureStore}>
    <App/>
    </Provider>,
    document.querySelector("#root")
);