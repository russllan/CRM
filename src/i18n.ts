// import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next'; 
 
// Здесь вы можете добавить любые языковые файлы, которые вам нужны. 
// Например, en.json для английского и ru.json для русского. 
import translationEn from './i18/en/translation.json'
import translationRu from './i18/ru/translation.json'
import i18next from 'i18next';
 
// Опции i18n 
const options = { 
  // По умолчанию используется язык 'en' 
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