import axios from "axios";
import { API } from ".";

export const getLatestTournamentDetails = async() => await API.get('/tournament/get-latest-tournament')
export const getLatestTournamentStats = async() => await API.get('/tournament/get-latest-tournament-stats')

