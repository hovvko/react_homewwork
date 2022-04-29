import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {CarsService} from '../../services';
import {CarDetails} from '../../components';

const CarDetailsPage = () => {
    const [car, setCar] = useState(null);
    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (state) {
            setCar(state);
        } else {
            CarsService.getById(id).then(({data}) => setCar(data));
        }
    }, [state, id]);

    return (
        <div>
            {
                car && <CarDetails car={car}/>
            }
        </div>
    );
};

export {
    CarDetailsPage
};