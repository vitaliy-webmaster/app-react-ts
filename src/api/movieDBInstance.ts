import axios from 'axios';
import config from './config';

const movieDB = axios.create({
	baseURL: config.baseUrl,
	params: { api_key: config.apiKey },
	headers: {
		'Content-Type': 'application/json'
	}
});

export default movieDB;
