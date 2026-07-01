import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  const isRTL = () => {
    return i18n.language === 'ar' || i18n.language === 'he';
  };

  return {
    t,
    i18n,
    changeLanguage,
    getCurrentLanguage,
    isRTL,
  };
}; 