import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {create, update} from '../../redux';

const CarForm = () => {
    const {register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.carReducer);

    const submit = (car) => {
        dispatch(create({car}));
    };

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate, setValue]);

    const updateCar = (car) => {
        dispatch(update({id: carForUpdate.id, car}));
    };

    return (
        <form>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
            <button onClick={handleSubmit(submit)}>SAVE</button>
            <button onClick={handleSubmit(updateCar)}>UPDATE</button>
        </form>
    );
};

export {
    CarForm
};