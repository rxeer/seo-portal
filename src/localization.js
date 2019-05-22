import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getLocalization } from './middlewares/localization';

import en from './locales/en.json';
import ua from './locales/ua.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ua: {
        translation: ua,
      },
    },
    lng: getLocalization(),
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;