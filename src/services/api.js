import axios from 'axios';

const corsProxyUrl = "https://cors.bridged.cc/";
const apiURL = 'https://superheroapi.com/api/';
const token = '5598659163538091';

export const api = axios.create({
	baseURL: (corsProxyUrl + apiURL + token),
})