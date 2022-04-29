import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAll} from '../../redux/slices';
import {Car} from '../../components';

const CarsPage = () => {
    const {cars} = useSelector(state => state.carsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {
    CarsPage
};