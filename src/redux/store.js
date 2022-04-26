import {combineReducers, configureStore} from '@reduxjs/toolkit';

import CounterReducer from './slices/counterSlice';

const reducers = combineReducers({
    CounterReducer
});

const store = configureStore({
    reducer: reducers
})

export default store;