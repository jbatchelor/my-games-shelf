import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(); 
  const getMiddleware = () => {
    if(process.env.NODE_ENV === 'development'){
      return composeWithDevTools(applyMiddleware(sagaMiddleware));
    } else {
      return applyMiddleware(sagaMiddleware);
    }
  };

  const store = createStore(
    rootReducer,
    getMiddleware()
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;