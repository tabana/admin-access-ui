import axios from 'axios';
import config from '../config';

const url = config.apiGatewaySession.URL;

async function getSession(sessionId) {
    return await axios.get(`${url}/${sessionId}`);
}

export default {
    getSession
}