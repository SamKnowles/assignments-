import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import joke from './joke';
import jokes from './jokes';

const rootReducer = combineReducers({joke, jokes})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;