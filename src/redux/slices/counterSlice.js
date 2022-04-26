import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 0
};

const CounterSlice = createSlice({
    name: 'CounterSlice',
    initialState,
    reducers: {
        inc: state => {
            state.counter += 1
        },
        dec: state => {
            state.counter -= 1
        },
        reset: (state, action) => {
            console.log(action.payload)
            state.counter = action.payload.number
        }
    }

});

const {reducer: CounterReducer, actions: {inc, dec, reset}} = CounterSlice;

export default CounterReducer;

export {
    inc,
    dec,
    reset
};