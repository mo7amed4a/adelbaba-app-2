import axios from "axios";

// Axios Interceptor Instance
const AxiosApp = axios.create({
    baseURL: process.env.BASE_URL
});

AxiosApp.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token') as string;
        const accessToken = JSON.parse(token);

        // If token is present, add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.token = accessToken;
        }
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);


// Axios Interceptor: Response Method
AxiosApp.interceptors.response.use(
    (response) => {
        // Can be modified response
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);


export default AxiosApp