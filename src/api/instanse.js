import axios from 'axios';

export const instance = axios.create({
	baseURL: 'http://www.lcs-it.com/feedback/form-processing.php/',
});