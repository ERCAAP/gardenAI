import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing, Typography } from '../../../../src/constants';

interface RecommendationsStepProps {
  recommendations: string;
  selectedLocation: string;
}

export const RecommendationsStep: React.FC<RecommendationsStepProps> = ({
  recommendations,
  selectedLocation
}) => {
  const parseRecommendations = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    const plants = lines.slice(1).map(line => {
      const [emoji, ...rest] = line.split(' ');
      const fullText = rest.join(' ');
      const [name, description] = fullText.split(' - ');
      return { emoji, name, description };
    });

    return plants;
  };

  const plants = parseRecommendations(recommendations);

  return (
    <ScrollView style={styles.stepContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <Text style={styles.stepTitle}>✨ AI Recommendations</Text>
        <Text style={styles.locationInfo}>For your location: {selectedLocation}</Text>
      </View>
      
      <View style={styles.recommendationsContainer}>
        {plants.map((plant, index) => (
          <View key={index} style={styles.plantCard}>
            <View style={styles.plantHeader}>
              <Text style={styles.plantEmoji}>{plant.emoji}</Text>
              <View style={styles.plantInfo}>
                <Text style={styles.plantName}>{plant.name}</Text>
                <Text style={styles.plantDescription}>{plant.description}</Text>
              </View>
            </View>
            <View style={styles.plantActions}>
              <View style={styles.actionButton}>
                <Ionicons name="heart-outline" size={16} color={Colors.primary} />
                <Text style={styles.actionText}>Save</Text>
              </View>
              <View style={styles.actionButton}>
                <Ionicons name="information-circle-outline" size={16} color={Colors.primary} />
                <Text style={styles.actionText}>Details</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.tipContainer}>
        <View style={styles.tipHeader}>
          <Ionicons name="bulb-outline" size={20} color={Colors.secondary} />
          <Text style={styles.tipTitle}>Pro Tip</Text>
        </View>
        <Text style={styles.tipText}>
          Consider your local climate patterns and soil conditions when planting. 
          These recommendations are based on your location's typical growing conditions.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    padding: Spacing.lg,
  },
  headerContainer: {
    marginBottom: Spacing.xl,
  },
  stepTitle: {
    fontSize: Typography.fontSize.xl,
    fontFamily: Typography.fontFamily.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  locationInfo: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  recommendationsContainer: {
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  plantCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  plantHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  plantEmoji: {
    fontSize: 24,
    marginRight: Spacing.md,
  },
  plantInfo: {
    flex: 1,
  },
  plantName: {
    fontSize: Typography.fontSize.lg,
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  plantDescription: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    lineHeight: Typography.lineHeight.relaxed,
  },
  plantActions: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  actionText: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.medium,
    color: Colors.primary,
  },
  tipContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: Spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: Colors.secondary,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  tipTitle: {
    fontSize: Typography.fontSize.md,
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.text,
  },
  tipText: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    lineHeight: Typography.lineHeight.relaxed,
  },
}); 