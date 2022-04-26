import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCat, updateCat} from '../../redux';

const CatForm = () => {
    const catRef = useRef();
    const dispatch = useDispatch();
    const {catForUpdate} = useSelector(state => state.CatReducer);

    if (catForUpdate) {
        catRef.current['value'] = catForUpdate.name;
    }

    return (
        <div>
            <label>Cat: <input type="text" ref={catRef}/></label>
            <button onClick={() => dispatch(addCat({name: catRef.current['value']}))}>ADD</button>
            <button onClick={() => dispatch(updateCat({id: catForUpdate.id, name: catRef.current['value']}))}>UPDATE
            </button>
        </div>
    );
};

export {
    CatForm
};