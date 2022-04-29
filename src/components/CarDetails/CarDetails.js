import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {deleteCar, setCarForUpdate} from '../../redux/slices';

const CarDetails = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            {id}---{model}---{price}---{year}
            <button onClick={() => {
                dispatch(setCarForUpdate({car}));
            }}>
                UPDATE
            </button>
            <button onClick={() => dispatch(deleteCar({id}))}>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>DELETE</Link>
            </button>
        </div>
    );
};

export
{
    CarDetails
};