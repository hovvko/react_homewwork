import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Link, Outlet} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {create, updateCar} from '../../redux/slices';

const TopForm = () => {
    const {register, handleSubmit, setValue, reset} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.carsReducer);

    const submit = (car) => {
        dispatch(create({car}));
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

    const update = (car) => {
        dispatch(updateCar({id: carForUpdate.id, car}));
        reset();
    }

    return (
        <div>
            <div>
                <form>
                    <label>Model<input type="text" {...register('model')}/></label>
                    <label>Price<input type="text" {...register('price')}/></label>
                    <label>Year<input type="text" {...register('year')}/></label>
                    <button onClick={handleSubmit(submit)}>SAVE</button>
                    <button onClick={handleSubmit(update)}>
                        <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                            UPDATE
                        </Link>
                    </button>
                    <hr/>
                </form>
            </div>
            <Outlet/>
        </div>
    );
};

export {
    TopForm
};