import {combineReducers, configureStore} from '@reduxjs/toolkit';

import carsReducer from './slices/cars.slice';

const reducers = combineReducers({
    carsReducer
});

const store = configureStore({
    reducer: reducers
});

export default store;