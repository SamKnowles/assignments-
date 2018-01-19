import { createStore } from 'redux';
import React, { Component } from 'react';

export function addUglyThing(payload){
    return {
        type: 'ADD_UGLY_THING',
        payload
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_UGLY_THING':
            return [...state, action.payload]

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;