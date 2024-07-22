import axios from 'axios'
import { getCookie } from '../utils/cookie';


const api = axios.create ({
    baseURL: import.meta.env.VITE_APP_BASE_UTL,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use((request) => {
    const accessToken = getCookie('accessToken');
    if(accessToken) {
        request.headers['Authorization'] = `bearer ${accessToken}`
    }
    return request
} , (error) => {
    return Promise.reject(error)
})

export default api;