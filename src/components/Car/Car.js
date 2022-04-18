import React from 'react';

const Car = ({car, setDeleteId, setCarForUpdate}) => {
    const {id, model, price, year} = car;

    return (
        <div>
            id: {id}<br/>
            model: {model}<br/>
            price: {price}<br/>
            year: {year}
            <button onClick={()=> setDeleteId(id)}>DELETE</button>
            <button onClick={()=> setCarForUpdate(car)}>UPDATE</button>
            <br/>
            <br/>
        </div>
    );
};

export default Car;