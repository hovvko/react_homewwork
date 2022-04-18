import React, {useEffect, useState} from 'react';

import {CarsService} from '../../services';
import Car from '../Car/Car';

const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        CarsService.getAll().then(({data}) => setCars(data));
    }, []);

    useEffect(() => {
        if (newCar) {
            CarsService.getAll().then(({data}) => setCars(data));
        }
        if (deleteId) {
            CarsService.delete(deleteId).then(() => {
                const filteredCars = cars.filter(car => car.id !== deleteId);
                setCars(filteredCars);
                setDeleteId(null);
            })
        }
    }, [newCar, deleteId]);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} setDeleteId={setDeleteId} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
};

export default Cars;