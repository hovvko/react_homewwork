import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {ICar} from '../../interfaces';
import {carService} from '../../services';
import {CarDetails} from '../../components';

const CarDetailsPage: FC = () => {
    const [car, setCar] = useState<ICar | null>(null);

    const carLocation = useLocation().state as ICar;
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (carLocation) {
            setCar(carLocation);
        } else {
            carService.getById(id as string).then(({data}) => setCar(data));
        }
    }, [carLocation, id]);

    return (
        <div>
            {
                car && <CarDetails key={car.id} car={car}/>
            }
        </div>
    );
};

export {
    CarDetailsPage
};