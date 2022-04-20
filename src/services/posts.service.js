import {AxiosService} from './axios.service';
import {urls} from '../configs';

const PostsService = {
    getAll: () => AxiosService.get(urls.posts),
    getById: (id) => AxiosService.get(`${urls.posts}/${id}`),
    getComments: (id) => AxiosService.get(`${urls.posts}/${id}${urls.comments}`)
}

export {
    PostsService
}