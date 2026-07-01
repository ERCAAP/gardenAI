import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FeatureCard } from '../../src/components/cards/FeatureCard';
import { ProBadge } from '../../src/components/common/ProBadge';
import { Colors } from '../../src/constants/Colors';
import { FEATURE_CARDS } from '../../src/data/features';

export default function HomeScreen() {
  const router = useRouter();
  // Kartları görseldeki sıraya göre düzenle
  const gardenDesignCard = FEATURE_CARDS[0]; // Garden Design - büyük
  const gridCards = FEATURE_CARDS.slice(1, 5); // Plants, Replace, Remove, Style - grid
  const createGardenCard = FEATURE_CARDS[5]; // Create Garden - büyük

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Garden AI</Text>
        <View style={styles.headerRight}>
          <ProBadge size="medium" />
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            // onPress={() => router.push('/settings')} // TODO: Update with correct settings route
          >
            <Ionicons name="settings-outline" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Ana feature card - Garden Design */}
        <FeatureCard data={gardenDesignCard} isLarge={true} />

        {/* Grid feature cards - 2x2 */}
        <View style={styles.gridContainer}>
          {gridCards.map((card, index) => (
            <FeatureCard 
              key={card.id} 
              data={card} 
              isLarge={false}
            />
          ))}
        </View>

        {/* Son büyük kart - Create Garden */}
        <FeatureCard data={createGardenCard} isLarge={true} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    backgroundColor: Colors.surface,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: -0.5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120, // Bottom navigation bar için extra padding
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
}); 