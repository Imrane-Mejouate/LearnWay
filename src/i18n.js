import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n.use(HttpBackend).use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'ar'],
    backend: {
        loadPath: '../public/locales/{{lng}}/translation.json'
    },
    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['cookie']
    }
});

export default i18n;