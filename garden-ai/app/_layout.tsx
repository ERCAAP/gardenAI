import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import 'react-native-reanimated';

// Initialize i18n first
import i18n from '@/src/i18n';
import { useTranslation } from 'react-i18next';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  
  const [i18nInitialized, setI18nInitialized] = useState(false);
  const { ready } = useTranslation();

  useEffect(() => {
    // i18n initialization'ı bekle
    const initI18n = async () => {
      try {
        // Check if i18n is already initialized
        if (i18n.isInitialized && ready) {
          console.log('✅ i18n already initialized');
          setI18nInitialized(true);
          return;
        }

        // Wait for initialization with timeout
        let attempts = 0;
        const maxAttempts = 20; // 10 seconds maximum wait
        
        const checkInitialization = () => {
          attempts++;
          console.log(`⏳ Checking i18n initialization attempt ${attempts}/${maxAttempts}`);
          
          if (i18n.isInitialized && ready) {
            console.log('✅ i18n initialization complete');
            setI18nInitialized(true);
          } else if (attempts < maxAttempts) {
            setTimeout(checkInitialization, 500);
          } else {
            console.warn('⚠️ i18n initialization timeout, proceeding anyway');
            setI18nInitialized(true);
          }
        };

        checkInitialization();
      } catch (error) {
        console.error('🚨 i18n initialization error:', error);
        setI18nInitialized(true); // Proceed anyway
      }
    };
    
    initI18n();
  }, [ready]);

  useEffect(() => {
    if (loaded && i18nInitialized) {
      console.log('🎉 App ready to show');
      SplashScreen.hideAsync();
    }
  }, [loaded, i18nInitialized]);

  if (!loaded || !i18nInitialized) {
    console.log('⏳ App not ready yet', { loaded, i18nInitialized });
    return null;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="#FFFFFF" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="garden-design" 
          options={{ presentation: 'modal', headerShown: true }} 
        />
        <Stack.Screen 
          name="plants-location" 
          options={{ presentation: 'modal', headerShown: true }} 
        />
        <Stack.Screen 
          name="replace-objects" 
          options={{ presentation: 'modal', headerShown: true }} 
        />
        <Stack.Screen 
          name="features/remove-objects"
          options={{ presentation: 'modal', headerShown: true }} 
        />
        <Stack.Screen 
          name="style-reference" 
          options={{ presentation: 'modal', headerShown: true }} 
        />
        <Stack.Screen 
          name="create-garden" 
          options={{ presentation: 'modal', headerShown: false }} 
        />
      </Stack>
    </>
  );
}
