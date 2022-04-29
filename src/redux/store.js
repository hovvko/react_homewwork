import {combineReducers, configureStore} from '@reduxjs/toolkit';

import carReducer from './slices/car.slice';

const reducers = combineReducers({
    carReducer
});

const store = configureStore({
    reducer: reducers
});

export default store;