import React, {FC, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {joiResolver} from '@hookform/resolvers/joi';

import {ICar} from '../../interfaces';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {create, update} from '../../redux';
import {carValidator} from '../../validators';

const CarForm: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors}
    } = useForm<ICar>({resolver: joiResolver(carValidator), mode: 'onTouched'});

    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.carReducer);

    const submit = async (car: ICar) => {
        await dispatch(create({car}));
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate, setValue]);

    const updateCar = async (car: ICar) => {
        await dispatch(update({car, id: `${carForUpdate?.id}`}));
        reset();
    }

    return (
        <form>
            <label>Model: <input type="text" {...register('model')}/></label>
            <label>Price: <input type="text" {...register('price')}/></label>
            <label>Year: <input type="text" {...register('year')}/></label>
            <button onClick={handleSubmit(submit)}>SAVE</button>
            <button onClick={handleSubmit(updateCar)}>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>UPDATE</Link>
            </button>
            {errors.model && <span style={{color: 'red'}}><br/>{errors.model.message}</span>}
            {errors.price && <span style={{color: 'red'}}><br/>{errors.price.message}</span>}
            {errors.year && <span style={{color: 'red'}}><br/>{errors.year.message}</span>}
        </form>
    );
};

export {
    CarForm
};