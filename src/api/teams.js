import {API} from '.'

export const getLatestTournamentTeams = async() => await API.get('/team/latest-tournament-teams')

export const getTeamById = async(id) => await API.get(`/team/${id}`)