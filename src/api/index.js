import axios from "axios";
// export const API = axios.create({baseURL: `http://localhost:8000`});
export const API = axios.create({baseURL: `https://football-backend-nikhil.vercel.app`});
// export const API = axios.create({baseURL: `http://192.168.0.104:8000`});

// API.interceptors.request.use((req) => {
//     const user = localStorage.getItem('user')
//     if(user){
//         const {token} = JSON.parse(user)
//         req.headers['x-api-key'] = token
//     }
//     return req;
// }); 