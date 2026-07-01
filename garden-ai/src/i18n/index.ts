import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import tr from './locales/tr.json';

const LANGUAGE_DETECTOR = {
  type: 'languageDetector' as const,
  async: true,
  detect: async (callback: (lang: string) => void) => {
    try {
      const language = await AsyncStorage.getItem('user-language');
      console.log('🔍 Detected language from storage:', language);
      if (language) {
        callback(language);
      } else {
        console.log('🔍 No language in storage, using default: tr');
        callback('tr'); // Default to Turkish
      }
    } catch (error) {
      console.warn('🚨 Language detection error:', error);
      callback('tr');
    }
  },
  init: () => {
    console.log('🌐 Language detector initialized');
  },
  cacheUserLanguage: async (language: string) => {
    try {
      console.log('💾 Caching language:', language);
      await AsyncStorage.setItem('user-language', language);
    } catch (error) {
      console.warn('🚨 Language caching error:', error);
    }
  },
};

const initI18n = async () => {
  try {
    console.log('🚀 Initializing i18n...');
    
    await i18n
      .use(LANGUAGE_DETECTOR)
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: en },
          tr: { translation: tr },
        },
        fallbackLng: 'tr',
        debug: __DEV__,
        
        // React Native uyumluluk ayarları
        compatibilityJSON: 'v3',
        
        interpolation: {
          escapeValue: false,
        },
        
        react: {
          useSuspense: false,
        },
        
        // Çoklu dil desteği
        lng: 'tr',
        
        // Namespace ayarları
        defaultNS: 'translation',
        ns: ['translation'],
        
        // Hata ayıklama
        missingKeyHandler: (lng, ns, key) => {
          if (__DEV__) {
            console.warn(`🚨 Missing translation key: ${key} for language: ${lng}`);
          }
        },
        
        // Yükleme ayarları
        load: 'languageOnly',
        preload: ['tr', 'en'],
        
        // Çeviri bulunamadığında fallback
        saveMissing: false,
        updateMissing: false,
      });

    console.log('✅ i18n initialized successfully');
    console.log('📋 Available resources:', Object.keys(i18n.getResourceBundle('tr', 'translation') || {}));
    
  } catch (error) {
    console.error('🚨 i18n initialization failed:', error);
  }
};

// Initialize immediately
initI18n();

export default i18n; 