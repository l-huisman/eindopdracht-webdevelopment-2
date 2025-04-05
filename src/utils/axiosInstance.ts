import axios from 'axios';
import {useAuthStore} from '@/stores/auth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(config => {
    const authStore = useAuthStore();
    const token = authStore.token;
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    console.log(error)
});

export default axiosInstance;
