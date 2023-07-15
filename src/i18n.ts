
import { initReactI18next } from 'react-i18next'; 
import translationEn from './i18/en/translation.json'
import translationRu from './i18/ru/translation.json'
import i18next from 'i18next';
 

const options = { 
  lng: 'en', 
  fallbackLng: 'en', 
  resources: { 
    en: { 
      translation: translationEn, 
    }, 
    ru: { 
      translation: translationRu, 
    }, 
  }, 
}; 
 
i18next.use(initReactI18next).init(options); 
 
export default i18next;