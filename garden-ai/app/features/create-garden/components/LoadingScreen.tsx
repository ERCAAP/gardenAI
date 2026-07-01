import { LoadingPlant } from '@/src/components/LoadingPlant';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { loadingSteps } from '../types';
import { getCurrentLoadingStep } from '../utils';

interface LoadingScreenProps {
  loadingStep: number;
  t: any;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Güzel yükleme mesajları
const BEAUTIFUL_LOADING_MESSAGES = [
  { message: 'Tohumları hazırlıyoruz...', icon: '🌱' },
  { message: 'Çiçekleri seçiyoruz...', icon: '🌸' },
  { message: 'Bahçe planını çiziyoruz...', icon: '🎨' },
  { message: 'Renkleri harmanlıyoruz...', icon: '🌈' },
  { message: 'Son dokunuşları yapıyoruz...', icon: '✨' }
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  loadingStep,
  t,
}) => {
  const currentStep = getCurrentLoadingStep(loadingSteps, loadingStep);
  const currentMessage = BEAUTIFUL_LOADING_MESSAGES[loadingStep] || BEAUTIFUL_LOADING_MESSAGES[0];
  
  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  
  // Floating particles animation
  const [particles] = useState(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      animValue: new Animated.Value(0),
      x: Math.random() * screenWidth,
      delay: Math.random() * 2000,
    }))
  );

  useEffect(() => {
    // Main entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      })
    ]).start();

    // Continuous rotation for plant
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: true,
      })
    ).start();

    // Progress animation
    Animated.timing(progressAnim, {
      toValue: (loadingStep + 1) / loadingSteps.length,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Floating particles animation
    particles.forEach((particle) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(particle.animValue, {
            toValue: 1,
            duration: 3000 + Math.random() * 2000,
            useNativeDriver: true,
          }),
          Animated.timing(particle.animValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          })
        ])
      ).start();
    });
  }, [loadingStep]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A7C59" />
      
      {/* Gradient Background */}
      <LinearGradient
        colors={['#4A7C59', '#6B9B7A', '#8DB4A0']}
        style={styles.gradientBackground}
      >
        {/* Floating Particles */}
        {particles.map((particle) => {
          const translateY = particle.animValue.interpolate({
            inputRange: [0, 1],
            outputRange: [screenHeight, -100],
          });
          
          const opacity = particle.animValue.interpolate({
            inputRange: [0, 0.1, 0.9, 1],
            outputRange: [0, 1, 1, 0],
          });

          return (
            <Animated.View
              key={particle.id}
              style={[
                styles.particle,
                {
                  left: particle.x,
                  transform: [{ translateY }],
                  opacity,
                }
              ]}
            >
              <Text style={styles.particleText}>✨</Text>
            </Animated.View>
          );
        })}

        {/* Main Content */}
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [
                { scale: scaleAnim },
                { translateY: slideAnim }
              ]
            }
          ]}
        >
          {/* Step Indicator */}
          <View style={styles.stepContainer}>
            <Text style={styles.stepText}>
              {loadingStep + 1} / {loadingSteps.length}
            </Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressTrack}>
              <Animated.View
                style={[
                  styles.progressFill,
                  {
                    transform: [{
                      scaleX: progressAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      })
                    }]
                  }
                ]}
              />
            </View>
          </View>

          {/* Plant Animation Container */}
          <Animated.View
            style={[
              styles.plantContainer,
              {
                transform: [{ rotate: rotateInterpolate }]
              }
            ]}
          >
            <View style={styles.plantWrapper}>
              <LoadingPlant
                plantType={currentStep.plantType}
                message=""
                size={140}
              />
            </View>
          </Animated.View>

          {/* Beautiful Message */}
          <Animated.View
            style={[
              styles.messageContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }
            ]}
          >
            <Text style={styles.iconText}>{currentMessage.icon}</Text>
            <Text style={styles.mainMessage}>
              {currentMessage.message}
            </Text>
            <Text style={styles.subtitle}>
              Hayalinizdeki bahçeyi oluşturuyoruz
            </Text>
          </Animated.View>

          {/* Loading Dots */}
          <View style={styles.dotsContainer}>
            {[0, 1, 2].map((index) => (
              <Animated.View
                key={index}
                style={[
                  styles.dot,
                  {
                    opacity: fadeAnim,
                    transform: [
                      {
                        scale: progressAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.5, 1],
                        })
                      }
                    ]
                  }
                ]}
              />
            ))}
          </View>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    position: 'relative',
  },
  particle: {
    position: 'absolute',
    zIndex: 1,
  },
  particleText: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    zIndex: 2,
  },
  stepContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    right: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  stepText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  progressContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 120 : 100,
    left: 32,
    right: 32,
  },
  progressTrack: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    transformOrigin: 'left',
  },
  plantContainer: {
    marginBottom: 40,
  },
  plantWrapper: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  iconText: {
    fontSize: 48,
    marginBottom: 16,
  },
  mainMessage: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
}); 