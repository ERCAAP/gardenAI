import {
    ChatMessage,
    CreateGardenRequest,
    createGardenService
} from '@/src/services/createGardenService';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { ScreenState, loadingSteps } from '../types';
import { debugI18n, generateMessageId } from '../utils';

export const useCreateGarden = () => {
  const { t, i18n } = useTranslation();
  const [screenState, setScreenState] = useState<ScreenState>(ScreenState.SELECTION);
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [customInput, setCustomInput] = useState<string>('');
  const [gardenResult, setGardenResult] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  
  // Chat related state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // Debug i18n status
  useEffect(() => {
    debugI18n(i18n);
  }, [i18n]);

  const handlePresetSelect = (presetId: string) => {
    setSelectedPreset(presetId);
    setCustomInput('');
  };

  const handleContinue = async () => {
    console.log('🔵 handleContinue called');
    console.log('🔵 selectedPreset:', selectedPreset);
    console.log('🔵 customInput:', customInput);
    console.log('🔵 customInput.trim():', customInput.trim());
    
    if (!selectedPreset && !customInput.trim()) {
      console.log('🔴 Validation failed - no preset and no custom input');
      Alert.alert('Hata', 'Lütfen bir seçenek seçin veya özel tasarım isteğinizi yazın.');
      return;
    }

    console.log('✅ Validation passed, proceeding...');
    
    const request: CreateGardenRequest = {
      style: selectedPreset || 'custom',
      customDescription: customInput.trim() || undefined,
    };

    console.log('🔵 Request:', request);
    await generateGarden(request);
  };

  const generateGarden = async (request: CreateGardenRequest) => {
    try {
      setIsLoading(true);
      setScreenState(ScreenState.LOADING);
      setLoadingStep(0);

      // Simulate loading steps
      const stepInterval = setInterval(() => {
        setLoadingStep(prev => {
          if (prev >= loadingSteps.length - 1) {
            clearInterval(stepInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 600);

      const result = await createGardenService.generateGardenDesign(request);
      
      clearInterval(stepInterval);
      setGardenResult(result);
      setScreenState(ScreenState.RESULTS);
      
      // Add initial chat message
      const welcomeMessage: ChatMessage = {
        id: generateMessageId(),
        message: 'Merhaba! Bahçe tasarımınız hakkında sorularınızı cevaplayabilirim. Size nasıl yardımcı olabilirim?',
        isUser: false,
        timestamp: Date.now(),
      };
      setChatMessages([welcomeMessage]);
      
    } catch (error) {
      Alert.alert('Hata', 'Bahçe tasarımı oluşturulamadı. Lütfen tekrar deneyin.');
      setScreenState(ScreenState.SELECTION);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendChatMessage = async () => {
    if (!chatInput.trim() || isChatLoading) return;

    const userMessage: ChatMessage = {
      id: generateMessageId(),
      message: chatInput.trim(),
      isUser: true,
      timestamp: Date.now(),
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsChatLoading(true);

    try {
      const response = await createGardenService.sendChatMessage(
        userMessage.message,
        gardenResult || undefined,
        chatMessages
      );

      const assistantMessage: ChatMessage = {
        id: generateMessageId(),
        message: response.message,
        isUser: false,
        timestamp: Date.now(),
      };

      setChatMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      Alert.alert('Hata', 'Mesaj gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleRetry = () => {
    setScreenState(ScreenState.SELECTION);
    setGardenResult(null);
    setChatMessages([]);
    setShowChat(false);
  };

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  return {
    // State
    screenState,
    selectedPreset,
    customInput,
    gardenResult,
    isLoading,
    loadingStep,
    chatMessages,
    chatInput,
    isChatLoading,
    showChat,
    t,
    i18n,
    
    // Actions
    handlePresetSelect,
    handleContinue,
    handleSendChatMessage,
    handleRetry,
    handleToggleChat,
    setCustomInput,
    setChatInput,
  };
}; 