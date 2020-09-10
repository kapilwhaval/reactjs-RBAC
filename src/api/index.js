import axios from 'axios';
import { getConfig } from "../constants/config-handler";
import constants from '../constants';

const api = (method, url, data) => {
    return axios({ method: method, url: `${getConfig().ROOT_URL}${url}`, data: data })
        .then((res) => { return res; })
        .catch((err) => { throw err; });
}

export const login = (data) => {
    return api('post', constants.API.LOGIN, data)
        .then((res) => { return res.data })
        .catch((err) => { throw err; });
}