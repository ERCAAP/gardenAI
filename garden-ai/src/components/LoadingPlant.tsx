import { Colors, Spacing } from '@/src/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line, Path } from 'react-native-svg';

export enum PlantType {
  BASIC_PLANT = 'basic',
  CACTUS = 'cactus',
  MODERN_PLANT = 'modern',
  PALM_TREE = 'palm',
  TREE = 'tree',
}

interface LoadingPlantProps {
  plantType: PlantType;
  message: string;
  size?: number;
}

const PlantIllustrations = {
  [PlantType.BASIC_PLANT]: ({ size = 120 }: { size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      {/* Pot */}
      <Path
        d="M35 85 L85 85 L80 110 L40 110 Z"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Leaves */}
      <Path
        d="M60 85 Q45 70 35 50 Q40 45 50 55 Q55 65 60 85"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 85 Q75 70 85 50 Q80 45 70 55 Q65 65 60 85"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 85 Q50 60 40 35 Q45 30 55 45 Q58 60 60 85"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 85 Q70 60 80 35 Q75 30 65 45 Q62 60 60 85"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 85 Q55 50 50 25 Q55 20 65 35 Q62 55 60 85"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  ),

  [PlantType.CACTUS]: ({ size = 120 }: { size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      {/* Pot */}
      <Path
        d="M40 90 L80 90 L75 110 L45 110 Z"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Main cactus body */}
      <Path
        d="M55 90 L55 40 Q55 35 60 35 Q65 35 65 40 L65 90"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Left arm */}
      <Path
        d="M55 65 Q50 65 45 65 Q40 65 40 60 L40 50 Q40 45 45 45"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Right arm */}
      <Path
        d="M65 55 Q70 55 75 55 Q80 55 80 50 L80 40 Q80 35 75 35"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Cactus spines */}
      <Line x1="58" y1="45" x2="62" y2="45" stroke={Colors.textSecondary} strokeWidth="1" />
      <Line x1="58" y1="55" x2="62" y2="55" stroke={Colors.textSecondary} strokeWidth="1" />
      <Line x1="58" y1="65" x2="62" y2="65" stroke={Colors.textSecondary} strokeWidth="1" />
      <Line x1="58" y1="75" x2="62" y2="75" stroke={Colors.textSecondary} strokeWidth="1" />
    </Svg>
  ),

  [PlantType.MODERN_PLANT]: ({ size = 120 }: { size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      {/* Modern pot with stand */}
      <Path
        d="M45 95 L75 95 L73 105 L47 105 Z"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Stand legs */}
      <Line x1="45" y1="105" x2="40" y2="115" stroke={Colors.textSecondary} strokeWidth="2" />
      <Line x1="75" y1="105" x2="80" y2="115" stroke={Colors.textSecondary} strokeWidth="2" />
      <Line x1="50" y1="105" x2="50" y2="115" stroke={Colors.textSecondary} strokeWidth="2" />
      <Line x1="70" y1="105" x2="70" y2="115" stroke={Colors.textSecondary} strokeWidth="2" />
      {/* Plant leaves */}
      <Path
        d="M60 95 Q50 80 45 60 Q45 55 50 60 Q55 75 60 95"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 95 Q70 80 75 60 Q75 55 70 60 Q65 75 60 95"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 95 Q55 70 50 45 Q50 40 55 45 Q58 65 60 95"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 95 Q65 70 70 45 Q70 40 65 45 Q62 65 60 95"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  ),

  [PlantType.PALM_TREE]: ({ size = 120 }: { size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      {/* Tree trunk */}
      <Path
        d="M58 110 Q58 80 55 50 Q55 30 60 25 Q65 30 65 50 Q62 80 62 110"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Palm fronds */}
      <Path
        d="M60 30 Q40 20 25 15 Q20 20 35 25 Q50 30 60 30"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 30 Q80 20 95 15 Q100 20 85 25 Q70 30 60 30"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 30 Q50 10 45 5 Q50 0 55 15 Q58 25 60 30"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 30 Q70 10 75 5 Q70 0 65 15 Q62 25 60 30"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 30 Q55 35 50 50 Q55 55 60 40 Q62 35 60 30"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      <Path
        d="M60 30 Q65 35 70 50 Q65 55 60 40 Q58 35 60 30"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Coconuts */}
      <Circle cx="55" cy="35" r="3" stroke={Colors.textSecondary} strokeWidth="1" fill="none" />
      <Circle cx="65" cy="38" r="3" stroke={Colors.textSecondary} strokeWidth="1" fill="none" />
      {/* Ground */}
      <Line x1="45" y1="115" x2="75" y2="115" stroke={Colors.textSecondary} strokeWidth="2" />
    </Svg>
  ),

  [PlantType.TREE]: ({ size = 120 }: { size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      {/* Tree trunk */}
      <Path
        d="M55 110 L55 70 Q55 65 60 65 Q65 65 65 70 L65 110"
        stroke={Colors.textSecondary}
        strokeWidth="2"
        fill="none"
      />
      {/* Tree foliage (circles for leaves) */}
      <Circle cx="45" cy="50" r="8" stroke={Colors.textSecondary} strokeWidth="2" fill="none" />
      <Circle cx="60" cy="45" r="10" stroke={Colors.textSecondary} strokeWidth="2" fill="none" />
      <Circle cx="75" cy="50" r="8" stroke={Colors.textSecondary} strokeWidth="2" fill="none" />
      <Circle cx="50" cy="35" r="9" stroke={Colors.textSecondary} strokeWidth="2" fill="none" />
      <Circle cx="70" cy="35" r="9" stroke={Colors.textSecondary} strokeWidth="2" fill="none" />
      <Circle cx="60" cy="25" r="8" stroke={Colors.textSecondary} strokeWidth="2" fill="none" />
      <Circle cx="40" cy="65" r="7" stroke={Colors.textSecondary} strokeWidth="2" fill="none" />
      <Circle cx="80" cy="65" r="7" stroke={Colors.textSecondary} strokeWidth="2" fill="none" />
      {/* Ground */}
      <Line x1="45" y1="115" x2="75" y2="115" stroke={Colors.textSecondary} strokeWidth="2" />
    </Svg>
  ),
};

export const LoadingPlant: React.FC<LoadingPlantProps> = ({
  plantType,
  message,
  size = 120,
}) => {
  const { t } = useTranslation();
  const PlantComponent = PlantIllustrations[plantType];

  return (
    <View style={styles.container}>
      <View style={styles.plantContainer}>
        <PlantComponent size={size} />
      </View>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.subtitle}>
        {t('createGarden.loading.pleaseWait')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.screen.horizontal,
  },
  plantContainer: {
    marginBottom: Spacing['3xl'],
  },
  message: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
}); 