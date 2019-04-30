import axios from 'axios';
import config from '../config';

const url = config.apiGatewayAdmin.URL;

function getUsers(query) {
    //return axios.get(`${url}`);
    return axios.post(`${url}`, query, { headers: { 'Content-Type': 'application/json' } });
}

export default {
    getUsers
}