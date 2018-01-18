import {createStore} from 'redux';

export function addOne() {
    return {
    type: 'ADD_ONE'
    }
}

export function minusOne() {
    return {
    type: 'MINUS_ONE'
    }
}

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_ONE':
            return state + 1;

        case 'MINUS_ONE':
            return state - 1;

        default:
            return state;
    }
}


const store = createStore(reducer);
export default store;