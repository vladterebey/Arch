import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translationEN.json';
import translationRU from './locales/ru/translationRU.json';

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        keySeparator: false,
    });

export default i18n;