import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers/index';

export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxPromise)
      )}
    >
      {children}
    </Provider>
  );
};
