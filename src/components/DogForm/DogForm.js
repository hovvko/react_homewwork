import React, {useRef} from 'react';

const DogForm = ({dispatch}) => {
    const dogRef = useRef();

    return (
        <div style={{marginLeft: '10px'}}>
            <label>DOG:<input type="text" ref={dogRef} name={'DOG'}/></label>
            <button onClick={() => dispatch({type: 'addDog', payload: dogRef.current['value']})}>SAVE</button>
        </div>
    );
};

export {
    DogForm
};