import axios from 'axios';
import {getCookie} from 'cookies-next'

export const Axios = (method, url, data, safety=true) => {

    const domain = 'localhost'
    const apiUrl = `http://${domain}:3001/api/v1/${url}`;

    return axios({
        method: method,
        url: apiUrl,
        data: data
    })
}

