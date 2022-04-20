import {AxiosService} from './axios.service';
import {urls} from '../configs';

const UsersService = {
    getAll: () => AxiosService.get(urls.users),
    getById: (id) => AxiosService.get(`${urls.users}/${id}`),
    getPosts: (id)=> AxiosService.get(`${urls.users}/${id}${urls.posts}`)
}

export {
    UsersService
}