import { createStore, applyMiddleware,compose  } from "redux";
import allreducers from "../Reducers/CombinedReducers";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import TempListSaga from '../Sagas/TempListSaga'

const sagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ 
  ? compose(
    applyMiddleware(sagaMiddleware), // Adding thunk middleware
      window.__REDUX_DEVTOOLS_EXTENSION__() // Enabling Redux DevTools Extension
    )
  : applyMiddleware(sagaMiddleware); // Fallback if DevTools are not available

const store = createStore(
allreducers, 
  storeEnhancers
);

sagaMiddleware.run(TempListSaga)
// const store = configureStore(allreducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
