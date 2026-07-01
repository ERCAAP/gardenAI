import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

import DrawMaskScreen from './components/DrawMaskScreen';
import ResultsScreen from './components/ResultsScreen';
import UploadScreen from './components/UploadScreen';

type Screen = 'upload' | 'drawMask' | 'results';

// 🔄 Replace Objects Feature - PRO
export default function ReplaceObjectsScreen() {
  const { t } = useTranslation();
  const [currentScreen, setCurrentScreen] = useState<Screen>('upload');
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [maskedImage, setMaskedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleImageUploaded = (imageUri: string) => {
    setOriginalImage(imageUri);
    setCurrentScreen('drawMask');
  };

  const handleMaskingComplete = (imageUri: string, userPrompt: string) => {
    setMaskedImage(imageUri); // This would be the image with the mask drawn on it
    setPrompt(userPrompt);
    // Simulate API call and result
    setIsLoading(true);
    setTimeout(() => {
      // In a real app, you would call an API here with originalImage, maskedImage, and prompt
      // For now, we'll just use the original image as the result for demonstration
      setResultImage(originalImage); 
      setIsLoading(false);
      setCurrentScreen('results');
    }, 3000); // Simulate network delay
  };

  const handleClose = () => {
    // Navigate back or close modal
    console.log('Close button pressed');
    // Reset state if needed
    setCurrentScreen('upload');
    setOriginalImage(null);
    setMaskedImage(null);
    setPrompt('');
    setResultImage(null);
  };
  
  const handleSave = () => {
    console.log('Save button pressed');
    // Implement save functionality
  };

  const handleShare = () => {
    console.log('Share button pressed');
    // Implement share functionality
  };

  const handleLike = () => {
    console.log('Like button pressed');
    // Implement like functionality
  };

  const handleDislike = () => {
    console.log('Dislike button pressed');
    // Implement dislike functionality
  };


  const renderScreen = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{t('replaceObjects.loading.processing')}</Text>
          <Text style={styles.loadingText}>{t('replaceObjects.loading.almostDone')}</Text>
          <Text style={styles.loadingText}>{t('replaceObjects.loading.pleaseWait')}</Text>
        </View>
      );
    }

    switch (currentScreen) {
      case 'upload':
        return <UploadScreen onImageUploaded={handleImageUploaded} />;
      case 'drawMask':
        if (!originalImage) {
          // Should not happen, but as a fallback
          setCurrentScreen('upload'); 
          return null;
        }
        return (
          <DrawMaskScreen
            imageUri={originalImage}
            onMaskingComplete={handleMaskingComplete}
            onClose={handleClose}
          />
        );
      case 'results':
        if (!resultImage) {
          // Should not happen, but as a fallback
          setCurrentScreen('upload');
          return null;
        }
        return (
          <ResultsScreen
            imageUri={resultImage}
            onSave={handleSave}
            onShare={handleShare}
            onClose={handleClose}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        );
      default:
        return <UploadScreen onImageUploaded={handleImageUploaded} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
}); 