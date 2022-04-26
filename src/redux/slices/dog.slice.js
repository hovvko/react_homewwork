import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    dogs: [],
    dogForUpdate: null
};

const DogSlice = createSlice({
    name: 'DogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const dog = action.payload.name;
            state.dogs.push({id: new Date().getTime(), name: dog});
        },
        deleteDog: (state, action) => {
            const {id} = action.payload;
            state.dogs = state.dogs.filter(dog => dog.id !== id);
        },
        getDogForUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dog;
        },
        updateDog: (state, action) => {
            const {id, name} = action.payload;

            state.dogs.forEach(dog => {
                if (dog.id === id) {
                    dog.name = name;
                }
            })
        }
    }
});

const {reducer: DogReducer, actions: {addDog, deleteDog, getDogForUpdate, updateDog}} = DogSlice;

export default DogReducer;

export {
    addDog,
    deleteDog,
    getDogForUpdate,
    updateDog
};