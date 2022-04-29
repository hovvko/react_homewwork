import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAll} from '../../redux';
import {Car} from '../Car/Car';

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state => state.carReducer);

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch, trigger]);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {
    Cars
};