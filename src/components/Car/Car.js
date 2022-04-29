import React from 'react';
import {Link} from 'react-router-dom';

const Car = ({car}) => {
    const {id, model} = car;

    return (
        <div>
            {id}---{model}
            <Link to={`cars/${id.toString()}`} state={car}>
                <button style={{marginLeft: '10px'}}>GET DETAILS</button>
            </Link>
        </div>
    );
};

export {
    Car
};