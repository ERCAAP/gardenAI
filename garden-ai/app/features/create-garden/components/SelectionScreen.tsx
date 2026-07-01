import { Colors } from '@/src/constants';
import { router } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Dimensions,
    Keyboard,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from '../styles';
import { presetOptions } from '../types';
import { safeT } from '../utils';

interface SelectionScreenProps {
  selectedPreset: string;
  customInput: string;
  onPresetSelect: (presetId: string) => void;
  onCustomInputChange: (text: string) => void;
  onContinue: () => void;
  onBack?: () => void;
  t: any;
}

const { width: screenWidth } = Dimensions.get('window');

// Optimized fallbacks with minimal stars
const FALLBACK_TEXTS = {
  title: 'Hayalinizdeki Bahçeyi Oluşturun',
  subtitle: 'AI ile birlikte büyülü bir bahçe deneyimi yaşayın',
  presets: {
    bohemian: 'Bohem açık hava alanı oluştur',
    tropical: 'Yemyeşil tropikal sığınak yarat',
    zen: 'Minimalist zen bahçesi tasarla'
  },
  customLabel: 'Özel Tasarım İsteğiniz',
  customPlaceholder: 'Hayal ettiğiniz bahçeyi yazın... örn: "Mor çiçeklerle dolu romantik bir köşe istiyorum"',
  continueButton: 'Büyülü Bahçemi Oluştur'
};

// Soft Shimmer Animation Component
const SoftShimmerEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const shimmerAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    );
    shimmerAnimation.start();
    return () => shimmerAnimation.stop();
  }, [shimmerAnim]);

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, screenWidth],
  });

  const opacity = shimmerAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.1, 0],
  });

  return (
    <View style={{ position: 'relative', overflow: 'hidden' }}>
      {children}
      <Animated.View
        style={[
          styles.softShimmerOverlay,
          {
            opacity,
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

export const SelectionScreen: React.FC<SelectionScreenProps> = ({
  selectedPreset,
  customInput,
  onPresetSelect,
  onCustomInputChange,
  onContinue,
  onBack,
  t,
}) => {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const [keyboardPadding, setKeyboardPadding] = React.useState(0);
  const [localText, setLocalText] = React.useState(customInput || '');

  // Sync local text with props
  React.useEffect(() => {
    setLocalText(customInput || '');
  }, [customInput]);

  const handleTextChange = (text: string) => {
    setLocalText(text);
    onCustomInputChange(text);
  };

  useEffect(() => {
    if (selectedPreset || localText.trim()) {
      const pulseAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.03,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      );
      pulseAnimation.start();
      return () => pulseAnimation.stop();
    }
  }, [selectedPreset, localText, pulseAnim]);

  // Enhanced keyboard handling with extra padding
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (event) => {
        setKeyboardPadding(200); // Extra padding for keyboard
        setTimeout(() => {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardPadding(0);
      }
    );

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  const handleBack = () => {
    console.log('Back button pressed');
    if (onBack) {
      onBack();
    } else {
      // Router ile geri git
      if (router.canGoBack()) {
        router.back();
      } else {
        // Ana sayfaya git
        router.replace('/(tabs)');
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      
      {/* Clean Minimal Header - No Title */}
      <View style={styles.minimalHeaderNoTitle}>
        <SafeAreaView style={styles.headerSafeArea} />
      </View>

      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={[
          styles.minimalScrollContent,
          { paddingBottom: styles.minimalScrollContent.paddingBottom + keyboardPadding }
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Title Section with Back Button */}
        <View style={styles.beautifulTitleSection}>
          <TouchableOpacity style={styles.beautifulBackButton} onPress={handleBack}>
            <Text style={styles.beautifulBackIcon}>‹</Text>
          </TouchableOpacity>
          <View style={styles.beautifulTitleContent}>
            <Text style={styles.beautifulMainTitle}>
              {safeT(t, 'createGarden.title', FALLBACK_TEXTS.title)}
            </Text>
            <Text style={styles.beautifulSubtitle}>
              {safeT(t, 'createGarden.subtitle', FALLBACK_TEXTS.subtitle)}
            </Text>
          </View>
        </View>

        {/* Beautiful Colorful Grid Options */}
        <View style={styles.beautifulPresetsContainer}>
          <Text style={styles.beautifulSectionTitle}>Tarzınızı Seçin</Text>
          <View style={styles.beautifulGridContainer}>
            {presetOptions.map((option, index) => {
              let fallbackText = FALLBACK_TEXTS.presets.bohemian;
              if (option.id === 'tropical') fallbackText = FALLBACK_TEXTS.presets.tropical;
              if (option.id === 'zen') fallbackText = FALLBACK_TEXTS.presets.zen;
              
              const isSelected = selectedPreset === option.id;
              
              // Define beautiful colors for each option
              const colorSchemes: { [key: string]: { bg: string; border: string; selectedBg: string; selectedBorder: string; emoji: string } } = {
                bohemian: { 
                  bg: '#F5E6D3', 
                  border: '#D4A574', 
                  selectedBg: '#E6D2B8',
                  selectedBorder: '#B8956A',
                  emoji: '✨'
                },
                tropical: { 
                  bg: '#E8F5E8', 
                  border: '#4CAF50', 
                  selectedBg: '#D7F0D7',
                  selectedBorder: '#43A047',
                  emoji: '✨'
                },
                zen: { 
                  bg: '#F0F4F8', 
                  border: '#607D8B', 
                  selectedBg: '#E1EBF0',
                  selectedBorder: '#546E7A',
                  emoji: '✨'
                }
              };
              
              const colors = colorSchemes[option.id] || colorSchemes.bohemian;
              
              return (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.beautifulGridItem,
                    { 
                      backgroundColor: isSelected ? colors.selectedBg : colors.bg,
                      borderColor: isSelected ? colors.selectedBorder : colors.border,
                    },
                    isSelected && styles.beautifulGridItemSelected,
                  ]}
                  onPress={() => onPresetSelect(option.id)}
                >
                  <View style={styles.beautifulGridContent}>
                    <View style={styles.beautifulEmojiContainer}>
                      <Text style={styles.beautifulEmoji}>{colors.emoji}</Text>
                      {isSelected && (
                        <View style={styles.beautifulSelectedBadge}>
                          <Text style={styles.beautifulSelectedIcon}>✓</Text>
                        </View>
                      )}
                    </View>
                    <Text style={[
                      styles.beautifulGridText,
                      isSelected && styles.beautifulGridTextSelected,
                      { color: isSelected ? colors.selectedBorder : colors.border }
                    ]}>
                      {safeT(t, option.titleKey, fallbackText)}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Beautiful Custom Input */}
        <View style={styles.beautifulInputContainer}>
          <Text style={styles.beautifulSectionTitle}>
            Özel İsteğiniz
          </Text>
          <Text style={styles.beautifulInputHint}>
            Hayalinizdeki bahçeyi detaylı bir şekilde anlatın
          </Text>
          <View style={[
            styles.beautifulInputWrapper,
            localText.length > 0 && styles.beautifulTextInputActive,
          ]}>
            <TextInput
              style={styles.beautifulTextInput}
              placeholder="Bahçe açıklamanızı buraya yazın..."
              placeholderTextColor="#999"
              value={localText}
              onChangeText={handleTextChange}
              multiline={true}
              textAlignVertical="top"
              numberOfLines={4}
              maxLength={300}
              editable={true}
              autoCorrect={true}
              autoCapitalize="sentences"
              onFocus={() => {
                setTimeout(() => {
                  scrollViewRef.current?.scrollToEnd({ animated: true });
                }, 100);
              }}
            />
            {localText.length > 0 && (
              <View style={styles.beautifulInputBadge}>
                <Text style={styles.beautifulInputBadgeText}>✨</Text>
              </View>
            )}
          </View>
          <View style={styles.beautifulCharCountContainer}>
            <Text style={styles.beautifulCharCount}>
              {localText.length}/300 karakter
            </Text>
            {localText.length > 250 && (
              <Text style={styles.beautifulCharCountWarning}>
                ✓ Harika detay!
              </Text>
            )}
          </View>
        </View>

        {/* Beautiful Continue Button */}
        <View style={styles.beautifulButtonContainer}>
          <TouchableOpacity
            style={[
              styles.beautifulContinueButton,
              (selectedPreset || localText.trim()) && styles.beautifulContinueButtonActive,
            ]}
            onPress={onContinue}
            disabled={!selectedPreset && !localText.trim()}
          >
            <View style={styles.beautifulButtonContent}>
              <Text style={[
                styles.beautifulButtonText,
                (selectedPreset || localText.trim()) && styles.beautifulButtonTextActive,
              ]}>
                {(selectedPreset || localText.trim()) 
                  ? "Bahçemi Oluştur" 
                  : "Bir seçenek belirleyin"
                }
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Beautiful Footer */}
        <View style={styles.beautifulFooter}>
          <Text style={styles.beautifulFooterText}>
            🎨 AI ile hayallerinizi gerçeğe dönüştürün
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}; 