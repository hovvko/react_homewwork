import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {ICar} from '../../interfaces';

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, model, year, price} = car

    return (
        <div style={{marginTop: '10px'}}>
            {id}---{model}---{price}---{year}
            <Link to={`${id}`} state={car}>
                <button style={{marginLeft: '10px'}}>GET DETAILS</button>
            </Link>
        </div>
    );
};

export {
    Car
};