import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Spacing, Typography } from '../../../../src/constants';
import { environmentTypes } from '../data';
import { EnvironmentStepProps } from '../types';

const { width: screenWidth } = Dimensions.get('window');

export const EnvironmentStep: React.FC<EnvironmentStepProps> = ({
  selectedEnvironment,
  onEnvironmentChange
}) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Select your environment</Text>
      
      <View style={styles.environmentGrid}>
        {environmentTypes.map((env) => (
          <TouchableOpacity
            key={env.id}
            style={[
              styles.environmentCard,
              selectedEnvironment === env.id && styles.environmentCardSelected
            ]}
            onPress={() => onEnvironmentChange(env.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.environmentEmoji}>{env.image}</Text>
            <Text style={[
              styles.environmentTitle,
              selectedEnvironment === env.id && styles.environmentTitleSelected
            ]}>
              {env.title}
            </Text>
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
  environmentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },
  environmentCard: {
    width: (screenWidth - Spacing.lg * 2 - Spacing.md) / 2,
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.lg,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minHeight: 100,
    justifyContent: 'center',
  },
  environmentCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    elevation: 4,
    shadowOpacity: 0.2,
  },
  environmentEmoji: {
    fontSize: 32,
    marginBottom: Spacing.sm,
  },
  environmentTitle: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.text,
    textAlign: 'center',
  },
  environmentTitleSelected: {
    color: Colors.white,
  },
}); 