import { instance } from './instanse';

export const sendMessage = (formValues) => instance.post('', formValues);