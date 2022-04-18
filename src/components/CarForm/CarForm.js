import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';

import {CarsService} from '../../services';
import {carValidator} from '../../validators';


const CarForm = ({setNewCar, carForUpdate}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });

    async function submit(car) {
        const {data} = await CarsService.create(car);
        setNewCar(data);
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate]);

    async function updateCar(car) {
        if (carForUpdate) {
            const {data} = await CarsService.update(carForUpdate.id, car);
            setNewCar(data);
        }
    }

    return (
        <form>
            <label>Model: <input type='text' {...register('model')} /></label>
            {errors.model && <span>{errors.model['message']}</span>}
            <label>Price: <input type='text' {...register('price', {valueAsNumber: true})}/></label>
            {errors.price && <span>{errors.price['message']}</span>}
            <label>Year: <input type='text' {...register('year', {valueAsNumber: true})}/></label>
            {errors.year && <span>{errors.year['message']}</span>}
            <button onClick={handleSubmit(submit)}>SAVE</button>
            <button onClick={handleSubmit(updateCar)}>UPDATE</button>
        </form>
    );
};

export default CarForm;