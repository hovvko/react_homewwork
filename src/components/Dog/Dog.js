import React from 'react';
import {useDispatch} from 'react-redux';

import {deleteDog, getDogForUpdate} from '../../redux';

const Dog = ({dog}) => {
    const {id, name} = dog;

    const dispatch = useDispatch();

    return (
        <div>
            {name}
            <button onClick={()=> dispatch(deleteDog({id}))}>DELETE</button>
            <button onClick={()=> dispatch(getDogForUpdate({dog}))}>UPDATE</button>
        </div>
    );
};

export {
    Dog
};