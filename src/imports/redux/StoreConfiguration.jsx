import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from "imports/redux/RootReducer";
import thunk from 'redux-thunk';

const logger = createLogger({

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(thunk),
    applyMiddleware(logger)
  )
);
