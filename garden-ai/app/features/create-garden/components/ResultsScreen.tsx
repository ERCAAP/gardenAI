import { Colors } from '@/src/constants';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from '../styles';
import { safeT } from '../utils';

interface ResultsScreenProps {
  gardenResult: any;
  onRetry: () => void;
  t: any;
}

// Hardcoded fallbacks for immediate display
const FALLBACK_TEXTS = {
  resultsTitle: '✨ Bahçeniz Hazır! ✨',
  resultsSubtitle: '🌿 AI tarafından özel olarak tasarlanan bahçeniz 🎨',
  detailsTitle: '🌱 Bahçe Detayları',
  descriptionTitle: '📝 Açıklama',
  plantsTitle: '🌺 Önerilen Bitkiler',
  maintenanceTitle: '🔧 Bakım İpuçları',
  costTitle: '💰 Tahmini Maliyet',
  totalCost: 'Toplam Maliyet',
  tryAgain: '🔄 Tekrar Dene',
};

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  gardenResult,
  onRetry,
  t,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.resultsScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>
            {safeT(t, 'createGarden.results.title', FALLBACK_TEXTS.resultsTitle)}
          </Text>
          <Text style={styles.resultsDescription}>
            {safeT(t, 'createGarden.results.description', FALLBACK_TEXTS.resultsSubtitle)}
          </Text>
        </View>

        {/* Garden Image */}
        {gardenResult?.imageUrl && (
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: gardenResult.imageUrl }}
              style={styles.gardenImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart-outline" size={24} color={Colors.white} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="share-outline" size={24} color={Colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Garden Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>{FALLBACK_TEXTS.detailsTitle}</Text>
          
          {/* Plant Suggestions */}
          {gardenResult?.plantSuggestions && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{FALLBACK_TEXTS.plantsTitle}</Text>
              <View style={styles.plantList}>
                {gardenResult.plantSuggestions.map((plant: string, index: number) => (
                  <Text key={index} style={styles.plantItem}>• {plant}</Text>
                ))}
              </View>
            </View>
          )}

          {/* Maintenance Tips */}
          {gardenResult?.maintenanceTips && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{FALLBACK_TEXTS.maintenanceTitle}</Text>
              <View style={styles.plantList}>
                {gardenResult.maintenanceTips.map((tip: string, index: number) => (
                  <Text key={index} style={styles.plantItem}>• {tip}</Text>
                ))}
              </View>
            </View>
          )}

          {/* Estimated Cost */}
          {gardenResult?.estimatedCost && (
            <View style={styles.costContainer}>
              <Text style={styles.costLabel}>{FALLBACK_TEXTS.costTitle}</Text>
              <Text style={styles.costValue}>{gardenResult.estimatedCost}</Text>
            </View>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
            <Ionicons name="refresh-outline" size={20} color={Colors.primary} />
            <Text style={styles.retryButtonText}>
              {safeT(t, 'createGarden.buttons.retry', FALLBACK_TEXTS.tryAgain)}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}; 