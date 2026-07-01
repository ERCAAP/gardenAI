/**
 * Safe translation function with fallback
 */
export const safeT = (t: any, key: string, fallback?: string) => {
  try {
    if (!t || typeof t !== 'function') {
      console.warn('Translation function (t) is not available, using fallback');
      return fallback || key;
    }
    
    const translation = t(key);
    
    // If translation returns the key itself, it means translation wasn't found
    if (translation === key && fallback) {
      console.warn(`Translation not found for key: ${key}, using fallback: ${fallback}`);
      return fallback;
    }
    
    // If translation is empty or undefined, use fallback
    if (!translation || translation.trim() === '') {
      console.warn(`Empty translation for key: ${key}, using fallback: ${fallback}`);
      return fallback || key;
    }
    
    return translation;
  } catch (error) {
    console.warn('Translation error for key:', key, error);
    return fallback || key;
  }
};

/**
 * Debug i18n status
 */
export const debugI18n = (i18n: any) => {
  if (__DEV__) {
    console.log('🌐 i18n Debug Status:', {
      isInitialized: i18n?.isInitialized,
      language: i18n?.language,
      hasResources: i18n?.hasResourceBundle ? i18n.hasResourceBundle(i18n.language, 'translation') : false,
      resourceKeys: i18n?.getResourceBundle ? Object.keys(i18n.getResourceBundle(i18n.language, 'translation') || {}) : [],
    });
  }
};

/**
 * Generate unique chat message ID
 */
export const generateMessageId = () => Date.now().toString();

/**
 * Get current loading step safely
 */
export const getCurrentLoadingStep = (loadingSteps: any[], currentStep: number) => {
  return loadingSteps[currentStep] || loadingSteps[0];
}; 