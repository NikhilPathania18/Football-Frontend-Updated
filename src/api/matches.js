import { API } from ".";

export const getLatestTournamentMatches = async() => await API.get('/match/latest-tournament-matches')

export const getMatchDetails = async(id) => await API.get(`/match/details/${id}`)