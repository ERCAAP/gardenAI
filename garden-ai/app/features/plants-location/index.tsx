import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Colors, Spacing, Typography } from '../../../src/constants';
import {
    EnvironmentStep,
    LocationStep,
    ProgressIndicator,
    RecommendationsStep,
    SpaceTypeStep
} from './components';
import { defaultLocation } from './data';
import { LocationData } from './types';

export default function PlantsLocationScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<LocationData>(defaultLocation);
  const [selectedSpaceType, setSelectedSpaceType] = useState<string | null>(null);
  const [selectedEnvironment, setSelectedEnvironment] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      handleGetRecommendations();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Garden Setup',
      headerStyle: { backgroundColor: Colors.primary },
      headerTintColor: Colors.white,
      headerTitleStyle: { fontFamily: Typography.fontFamily.semiBold },
      headerLeft: currentStep > 0 ? () => (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.white} />
        </TouchableOpacity>
      ) : undefined,
    });
  }, [navigation, currentStep]);

  const handleLocationChange = (location: LocationData) => {
    setSelectedLocation(location);
  };

  const handleSpaceTypeChange = (spaceType: string) => {
    setSelectedSpaceType(spaceType);
  };

  const handleEnvironmentChange = (environment: string) => {
    setSelectedEnvironment(environment);
  };

  const handleGetRecommendations = () => {
    if (!selectedSpaceType || !selectedEnvironment) {
      Alert.alert('Eksik Bilgi', 'Lütfen tüm seçimleri yapın');
      return;
    }

    setIsLoading(true);
    
    // Simulate AI service call
    setTimeout(() => {
      setIsLoading(false);
      setRecommendations(`${selectedLocation.address} için önerilen bitkiler:\n\n🌹 Gül - Türk ikliminde mükemmel\n🌿 Lavanta - Az su ister\n🌱 Biberiye - Aromalı ve faydalı\n🌺 Hibiskus - Renkli çiçekleri ile bahçenizi süsler`);
    }, 2000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true; // Location is always available
      case 1: return selectedSpaceType !== null;
      case 2: return selectedEnvironment !== null;
      default: return false;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <LocationStep
            selectedLocation={selectedLocation}
            onLocationChange={handleLocationChange}
          />
        );
      case 1:
        return (
          <SpaceTypeStep
            selectedSpaceType={selectedSpaceType}
            onSpaceTypeChange={handleSpaceTypeChange}
          />
        );
      case 2:
        return (
          <EnvironmentStep
            selectedEnvironment={selectedEnvironment}
            onEnvironmentChange={handleEnvironmentChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ProgressIndicator currentStep={currentStep} totalSteps={3} />
        
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {recommendations ? (
            <RecommendationsStep
              recommendations={recommendations}
              selectedLocation={selectedLocation.address}
            />
          ) : (
            renderCurrentStep()
          )}
        </ScrollView>

        {!recommendations && (
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.continueButton, !canProceed() && styles.continueButtonDisabled]}
              onPress={handleNext}
              disabled={!canProceed() || isLoading}
            >
              <LinearGradient
                colors={canProceed() ? [Colors.primary, Colors.secondary] : ['#ccc', '#999']}
                style={styles.continueButtonGradient}
              >
                {isLoading ? (
                  <ActivityIndicator color={Colors.white} size="small" />
                ) : (
                  <Text style={styles.continueButtonText}>
                    {currentStep === 2 ? 'Get Recommendations' : 'Continue'}
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  footer: {
    padding: Spacing.lg,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  continueButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  continueButtonDisabled: {
    opacity: 0.6,
  },
  continueButtonGradient: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: Typography.fontSize.md,
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.white,
  },
  backButton: {
    marginLeft: -8,
    padding: 8,
  },
}); 