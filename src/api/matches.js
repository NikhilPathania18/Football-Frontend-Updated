import { API } from ".";

export const getLatestTournamentMatches = async() => await API.get('/match/latest-tournament-matches')