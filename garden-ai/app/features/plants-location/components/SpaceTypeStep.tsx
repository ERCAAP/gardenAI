import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Spacing, Typography } from '../../../../src/constants';
import { spaceTypes } from '../data';
import { SpaceTypeStepProps } from '../types';

export const SpaceTypeStep: React.FC<SpaceTypeStepProps> = ({
  selectedSpaceType,
  onSpaceTypeChange
}) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Select your space type</Text>
      
      <View style={styles.cardsContainer}>
        {spaceTypes.map((space) => (
          <TouchableOpacity
            key={space.id}
            style={[
              styles.spaceCard,
              selectedSpaceType === space.id && styles.spaceCardSelected
            ]}
            onPress={() => onSpaceTypeChange(space.id)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={selectedSpaceType === space.id 
                ? [Colors.primary, Colors.secondary] 
                : ['#f8f9fa', '#e9ecef']
              }
              style={styles.spaceCardGradient}
            >
              <Text style={styles.spaceCardEmoji}>{space.image}</Text>
              <Text style={[
                styles.spaceCardTitle,
                selectedSpaceType === space.id && styles.spaceCardTitleSelected
              ]}>
                {space.title}
              </Text>
              <Text style={[
                styles.spaceCardDescription,
                selectedSpaceType === space.id && styles.spaceCardDescriptionSelected
              ]}>
                {space.description}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    padding: Spacing.lg,
  },
  stepTitle: {
    fontSize: Typography.fontSize.xl,
    fontFamily: Typography.fontFamily.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  cardsContainer: {
    gap: Spacing.lg,
  },
  spaceCard: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  spaceCardSelected: {
    elevation: 4,
    shadowOpacity: 0.2,
  },
  spaceCardGradient: {
    padding: Spacing.lg,
    minHeight: 120,
    justifyContent: 'center',
  },
  spaceCardEmoji: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  spaceCardTitle: {
    fontSize: Typography.fontSize.lg,
    fontFamily: Typography.fontFamily.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  spaceCardTitleSelected: {
    color: Colors.white,
  },
  spaceCardDescription: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  spaceCardDescriptionSelected: {
    color: Colors.white,
    opacity: 0.9,
  },
}); 