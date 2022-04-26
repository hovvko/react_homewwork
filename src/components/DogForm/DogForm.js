import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addDog, updateDog} from '../../redux';

const DogForm = () => {
    const dogRef = useRef();
    const dispatch = useDispatch();
    const {dogForUpdate} = useSelector(state => state.DogReducer);

    if (dogForUpdate) {
        dogRef.current['value'] = dogForUpdate.name;
    }

    return (
        <div style={{marginLeft: '10px'}}>
            <label>Dog: <input type="text" ref={dogRef}/></label>
            <button onClick={()=> dispatch(addDog({name: dogRef.current['value']}))}>ADD</button>
            <button onClick={()=> dispatch(updateDog({id: dogForUpdate.id, name: dogRef.current['value']} ))}>UPDATE</button>
        </div>
    );
};

export {
    DogForm
};