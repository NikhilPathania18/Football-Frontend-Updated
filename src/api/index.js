import axios from "axios";
export const API = axios.create({baseURL: `http://192.168.157.208:8000`});

// API.interceptors.request.use((req) => {
//     const user = localStorage.getItem('user')
//     if(user){
//         const {token} = JSON.parse(user)
//         req.headers['x-api-key'] = token
//     }
//     return req;
// });