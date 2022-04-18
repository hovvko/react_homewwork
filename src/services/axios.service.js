import {baseURL} from '../configs';

const axios = require('axios');

const AxiosService = axios.create({baseURL});

export {AxiosService};