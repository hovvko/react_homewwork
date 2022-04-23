import React from 'react';

const Cats = ({cat: {id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button style={{marginLeft: '10px'}} onClick={() => {
                dispatch({type: 'deleteCat', payload: id})
            }}>DELETE
            </button>
        </div>
    );
};

export {
    Cats
};