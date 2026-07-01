// 🏗️ Create Garden Feature - Refactored
import React from 'react';
import { LoadingScreen, ResultsScreen, SelectionScreen } from './components';
import { useCreateGarden } from './hooks/useCreateGarden';
import { ScreenState } from './types';

export default function CreateGardenScreen() {
  const {
    screenState,
    selectedPreset,
    customInput,
    gardenResult,
    loadingStep,
    chatMessages,
    chatInput,
    isChatLoading,
    showChat,
    t,
    handlePresetSelect,
    handleContinue,
    handleSendChatMessage,
    handleRetry,
    handleToggleChat,
    setCustomInput,
    setChatInput,
  } = useCreateGarden();

  const handleCustomInputChange = (text: string) => {
    setCustomInput(text);
    if (text.trim()) {
      handlePresetSelect(''); // Clear preset if custom input is used
    }
  };

  switch (screenState) {
    case ScreenState.LOADING:
      return (
        <LoadingScreen 
          loadingStep={loadingStep}
          t={t}
        />
      );
      
    case ScreenState.RESULTS:
      return (
        <ResultsScreen
          gardenResult={gardenResult}
          onRetry={handleRetry}
          t={t}
        />
      );
      
    default:
      return (
        <SelectionScreen
          selectedPreset={selectedPreset}
          customInput={customInput}
          onPresetSelect={handlePresetSelect}
          onCustomInputChange={handleCustomInputChange}
          onContinue={handleContinue}
          onBack={() => {
            // Ana sayfaya geri dön
            console.log('Back pressed from selection screen');
          }}
          t={t}
        />
      );
  }
} 