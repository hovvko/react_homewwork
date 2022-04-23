import React, {useRef} from 'react';

const CatForm = ({dispatch}) => {
    const catRef = useRef();

    return (
        <div>
            <label>CAT:<input type="text" ref={catRef} name={'CAT'}/></label>
            <button onClick={() => dispatch({type: 'addCat', payload: catRef.current['value']})}>SAVE</button>
        </div>
    );
};

export {
    CatForm
};