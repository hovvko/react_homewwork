import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {CarsService} from '../../services';

const initialState = {
    cars: [],
    carForUpdate: null,
};

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.getAll();
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

const create = createAsyncThunk(
    'carsSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.create(car);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const updateCar = createAsyncThunk(
    'carsSlice/updateCar',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await CarsService.update(id, car);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const deleteCar = createAsyncThunk(
    'carsSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await CarsService.delete(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars = [...state.cars, action.payload];
            })
            .addCase(updateCar.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.id);
                state.cars[index] = action.payload;
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.cars = state.cars.filter(car => car.id !== action.payload);
            })
            .addCase(getAll.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(create.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(updateCar.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(deleteCar.rejected, (state, action) => {
                console.log(action.payload);
            })
    }
});

const {reducer: carsReducer, actions: {setCarForUpdate}} = carsSlice;

export default carsReducer;

export {
    getAll,
    create,
    setCarForUpdate,
    updateCar,
    deleteCar
}