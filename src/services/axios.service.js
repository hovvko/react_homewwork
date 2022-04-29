import baseURL from '../configs/urls';

const axios = require('axios');

const AxiosService = axios.create({baseURL});

export {
    AxiosService
};