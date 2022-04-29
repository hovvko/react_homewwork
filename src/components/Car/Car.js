import React from 'react';
import {useDispatch} from 'react-redux';

import {deleteById, getCarForUpdate} from '../../redux';

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            {id}---{model}---{price}---{year}
            <button onClick={() => dispatch(getCarForUpdate({car}))}>UPDATE</button>
            <button onClick={() => dispatch(deleteById({id}))}>DELETE</button>
        </div>
    );
};

export {
    Car
};