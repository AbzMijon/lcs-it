import instanse from './instanse';

export const sendMessage = (formValues) => instanse.post('/users', formValues);