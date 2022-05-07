import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {ICar} from '../../interfaces';
import {useAppDispatch} from '../../hooks';
import {deleteCar, setCarForUpdate} from '../../redux';

interface IProps {
    car: ICar
}

const CarDetails: FC<IProps> = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useAppDispatch();

    return (
        <div>
            {id}---{model}---{price}---{year}
            <button onClick={() => dispatch(setCarForUpdate({car}))}>UPDATE</button>
            <button onClick={() => dispatch(deleteCar({id: `${id}`}))}>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                    DELETE
                </Link>
            </button>
        </div>
    );
};

export {
    CarDetails
};