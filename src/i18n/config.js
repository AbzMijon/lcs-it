import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

export const defaultNS = 'common';

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
            ns: ['common', 'home'],
            defaultNS,
            fallbackLng: 'en', //change version of sites
            debug: true,
            detection: {
            order: ['querystring', 'cookie'],
            caches: ['cookie'],
            lookupCookie: 'lang',
        },
});
