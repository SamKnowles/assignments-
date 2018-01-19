import {createStore, combineReducers} from 'redux';
import counter from './counter';

let store = createStore(combineReducers({counter}));

export default store;