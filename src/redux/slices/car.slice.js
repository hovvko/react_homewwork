import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {CarsService} from '../../services';

const initialState = {
    cars: [],
    carForUpdate: null,
};

const getAll = createAsyncThunk(
    'carSlice/getALl',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.getAll();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.create(car);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const update = createAsyncThunk(
    'carSlice/update',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.update(id, car);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {rejectWithValue}) => {
        try {
            await CarsService.deleteById(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload;
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload);
        },
        [update.fulfilled]: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = action.payload;
        },
        [deleteById.fulfilled]: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload);
        },
        [getAll.rejected]: (state, action) => {
            console.log(action.payload);
        },
        [create.rejected]: (state, action) => {
            console.log(action.payload);
        },
        [update.rejected]: (state, action) => {
            console.log(action.payload);
        },
        [deleteById.rejected]: (state, action) => {
            console.log(action.payload);
        }
    }

});

const {reducer: carReducer, actions: {getCarForUpdate}} = carSlice;

export default carReducer;

export {
    getAll,
    create,
    update,
    getCarForUpdate,
    deleteById
};