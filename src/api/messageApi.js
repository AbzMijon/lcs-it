import { instance } from './instanse';

export const sendMessage = (formValues) => instance.post('', formValues, {
    maxBodyLength: Infinity,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    }
});