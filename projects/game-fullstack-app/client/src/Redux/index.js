import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import games from './games';

export default createStore(combineReducers({games}), applyMiddleware(thunk));