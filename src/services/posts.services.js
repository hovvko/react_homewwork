import {AxiosService} from './axios.service';
import {urls} from '../configs';

const PostsServices = {
    getUsersPostsById: (id)=> AxiosService(`${urls.users}/${id}${urls.posts}`)
};

export {PostsServices};