'use strict';
import { createStore } from 'redux';

console.log('App Started!');

//store

const defaultState = {
    balance = 0
}

//Actions!


const actionIncrement = {
    type: 'increment'
}

const actionDecrement = {
    type: 'decrement'
}

//Reducer!!

const account = (state=defaultState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                balance: state.balance +1,
            };
        case 'decrement':
                return {
                balance: state.balance -1
                }
            default:
                    return state;
    }
}

const store = createStore(account);

store.subscribe(()  => {
    console.log('subscribing to the state changes,,,');
    const state = store.getState()
    console.log("the state is:", state);
});

store.dispatch(actionIncrement);