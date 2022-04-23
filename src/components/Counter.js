import React, {useReducer} from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RES':
            return state=0;
    }
}

const Counter = () => {
    let [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{marginLeft: '10px'}}>
            <h1>Counter: {state}</h1>
            <button onClick={()=> dispatch({type: 'INC'})}>INC</button>
            <button onClick={()=> dispatch({type: 'DEC'})}>DEC</button>
            <button onClick={()=> dispatch({type: 'RES'})}>RES</button>
        </div>
    );
};

export {
    Counter
};