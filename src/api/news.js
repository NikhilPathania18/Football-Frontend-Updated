import { API } from ".";

export const fetchNews = async()=> await API.get("/news");

export const getNewsById = async(id) => await API.get(`/news/${id}`);

