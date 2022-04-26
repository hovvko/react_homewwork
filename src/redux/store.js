import {combineReducers, configureStore} from '@reduxjs/toolkit';

import CatReducer from './slices/cat.slice';
import DogReducer from './slices/dog.slice';

const reducers = combineReducers({
    CatReducer,
    DogReducer
});

const store = configureStore({
    reducer: reducers
});

export default store;

