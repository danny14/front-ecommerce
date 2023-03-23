import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rooReducer from './redux/reducers'

const initialstate = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
);