import {AxiosService} from './axios.service';
import {urls} from '../configs';

const CarsService = {
    getAll: ()=> AxiosService.get(urls.cars),
    getById: (id) => AxiosService.get(`${urls.cars}/${id}`),
    create: (car) => AxiosService.post(urls.cars, car),
    update: (id, car) => AxiosService.put(`${urls.cars}/${id}`, car),
    delete: (id) => AxiosService.delete(`${urls.cars}/${id}`)
};

export {
    CarsService
};