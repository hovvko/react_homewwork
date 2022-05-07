import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAll} from '../../redux';
import {Car} from '../Car/Car';

const Cars: FC = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

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
    Cars
};