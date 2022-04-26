import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    catForUpdate: null
};

const CatSlice = createSlice({
    name: 'CatSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const cat = {id: new Date().getTime(), name: action.payload.name}
            state.cats.push(cat);
        },
        deleteCat: (state, action) => {
            const {id} = action.payload
            state.cats = state.cats.filter(cat => cat.id !== id);
        },
        getCatForUpdate: (state, action) => {
            state.catForUpdate = action.payload.cat;
        },
        updateCat: (state, action) => {
            const {id} = action.payload;
            const {name} = action.payload;

            state.cats.forEach(cat => {
                if (cat.id === id) {
                    cat.name = name;
                }
            });
        }
    }
});

const {reducer: CatReducer, actions: {addCat, deleteCat,getCatForUpdate, updateCat}} = CatSlice;

export default CatReducer;

export {
    addCat,
    deleteCat,
    getCatForUpdate,
    updateCat
};