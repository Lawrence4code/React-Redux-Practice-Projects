import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';
import rootReducer from './reducers/index';

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        rootReducer,
        initialState,
        applyMiddleware(async, stateValidator)
      )}
    >
      {children}
    </Provider>
  );
};
