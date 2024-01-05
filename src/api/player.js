import { API } from ".";

export const getPlayerDetails = async(id) => await API.get(`/player/${id}`)