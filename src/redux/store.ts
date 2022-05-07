import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {carReducer} from './slices';

const reducers = combineReducers({
    carReducer
});

const setupStore = () => configureStore({
    reducer: reducers
});

type RootState = ReturnType<typeof reducers>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch
};

export {
    setupStore
};