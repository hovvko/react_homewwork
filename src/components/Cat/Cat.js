import React from 'react';
import {useDispatch} from 'react-redux';

import {deleteCat, getCatForUpdate} from '../../redux';

const Cat = ({cat}) => {
    const {id, name} = cat;

    const dispatch = useDispatch();

    return (
        <div>
            {name}
            <button onClick={() => dispatch(deleteCat({id}))}>DELETE</button>
            <button onClick={()=> dispatch(getCatForUpdate({cat}))}>UPDATE</button>
        </div>
    );
};

export {
    Cat
};