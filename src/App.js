import {useReducer} from 'react';

import {CatForm, Cats, DogForm, Dogs} from './components';

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cat: [...state.cat, {name: action.payload, id: Date.now()}]};
        case 'addDog':
            return {...state, dog: [...state.dog, {name: action.payload, id: Date.now()}]};
        case 'deleteCat':
            return {...state, cat: state.cat.filter(cat => cat.id !== action.payload)};
        case 'deleteDog':
            return {...state, dog: state.dog.filter(dog => dog.id !== action.payload)};
        default:
            return
    }
}

let initialState = {cat: [], dog: []};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CatForm dispatch={dispatch}/>
                <DogForm dispatch={dispatch}/>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    {state.cat.map(cat => <Cats key={cat.id} cat={cat} dispatch={dispatch}/>)}
                </div>
                <div>
                    {state.dog.map(dog => <Dogs key={dog.id} dog={dog} dispatch={dispatch}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
