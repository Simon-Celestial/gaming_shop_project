import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../public/translations/en.json";
import translationRU from "../public/translations/ru.json";
import translationTR from "../public/translations/tr.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN,
            },
            ru: {
                translation: translationRU,
            },
            tr: {
                translation: translationTR,
            }

        },
        lng: 'en',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;