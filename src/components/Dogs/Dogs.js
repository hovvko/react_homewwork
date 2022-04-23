import React from 'react';

const Dogs = ({dog: {id, name}, dispatch}) => {
    return (
        <div>
            {name}
            <button style={{marginLeft: '10px'}} onClick={() => {
                dispatch({type: 'deleteDog', payload: id});
            }}>DELETE
            </button>
        </div>
    );
};

export {
    Dogs
};