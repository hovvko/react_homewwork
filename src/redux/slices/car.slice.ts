import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ICar} from '../../interfaces';
import {carService} from '../../services';

interface IState {
    cars: ICar[],
    carForUpdate: ICar | null
}

const initialState: IState = {
    cars: [],
    carForUpdate: null
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const create = createAsyncThunk<ICar, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const update = createAsyncThunk<ICar, { car: ICar, id: string }>(
    'carSlice/update',
    async ({car, id}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const deleteCar = createAsyncThunk<{ id: string }, { id: string }>(
    'carSlice/delete',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return {id};
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(update.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car => car.id === action.payload.id);
                state.cars[index] = action.payload;
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.cars = state.cars.filter(car => car.id !== action.payload.id);
            })
            .addCase(getAll.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(create.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(update.rejected, (state, action) => {
                console.log(action.payload);
            })
            .addCase(deleteCar.rejected, (state, action) => {
                console.log(action.payload);
            })
    }
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

export {
    carReducer,
    create
};

export {
    getAll,
    setCarForUpdate,
    update,
    deleteCar
};