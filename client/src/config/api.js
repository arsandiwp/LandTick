import axios from 'axios';


export function getApi () {
    console.log("ini base url", process.env.REACT_APP_BASE_URL)
}
// membuat base URL
export const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

// men set Auth Token 
export const setAuthToken = (token) => {
    if (token) {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete API.defaults.headers.common['Authorization'];
    }
}