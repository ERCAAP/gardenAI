import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ColorValue, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Spacing } from '../../constants/Spacing';
import { Typography } from '../../constants/Typography';
import { FeatureCard as FeatureCardType } from '../../types';
import { ProBadge } from '../common/ProBadge';

interface FeatureCardProps {
  data: FeatureCardType;
  isLarge?: boolean;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - Spacing.screen.horizontal * 2 - Spacing.md) / 2;
const largeCardWidth = width - Spacing.screen.horizontal * 2;

// Route mapping
const routeMap: Record<string, string> = {
  'GardenDesign': '/garden-design',
  'PlantsLocation': '/plants-location',
  'ReplaceObjects': '/replace-objects',
  'RemoveObjects': '/remove-objects',
  'StyleReference': '/style-reference',
  'CreateGarden': '/create-garden',
  'Explore': '/explore',
  'History': '/history',
};

// Gradient parser with proper typing for multiple colors
const parseGradient = (gradientString: string): [ColorValue, ColorValue, ...ColorValue[]] => {
  // Çoklu renk desteği için regex
  const colorRegex = /#[a-fA-F0-9]{6}/g;
  const colors = gradientString.match(colorRegex);
  
  if (colors && colors.length >= 2) {
    return colors as [ColorValue, ColorValue, ...ColorValue[]];
  }
  
  // Fallback for solid colors - create a subtle gradient
  const fallbackColor = gradientString as ColorValue;
  return [fallbackColor, fallbackColor];
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  data, 
  isLarge = false 
}) => {
  const router = useRouter();

  const handlePress = () => {
    // Pro özellik kontrolü
    if (data.isPro) {
      // TODO: Pro subscription kontrolü
      console.log('Pro feature - redirect to subscription');
      return;
    }
    
    // Normal sayfa yönlendirmesi
    const route = routeMap[data.route];
    if (route) {
      router.push(route as any);
    }
  };

  const cardStyle = isLarge ? styles.largeCard : styles.card;
  const imageStyle = isLarge ? styles.largeImage : styles.image;
  const contentStyle = isLarge ? styles.largeContent : styles.content;

  // Image type check
  const isGradient = typeof data.image === 'string' && data.image.includes('linear-gradient');
  const isColorCode = typeof data.image === 'string' && data.image.startsWith('#');
  const isImageSource = !isGradient && !isColorCode;

  return (
    <TouchableOpacity 
      style={[cardStyle, { width: isLarge ? largeCardWidth : cardWidth }]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      {/* Görsel */}
      <View style={styles.imageContainer}>
        {isGradient ? (
          <LinearGradient
            colors={parseGradient(data.image as string)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={imageStyle}
          />
        ) : isColorCode ? (
          <View 
            style={[
              imageStyle, 
              { backgroundColor: data.image as string }
            ]} 
          />
        ) : (
          <Image 
            source={data.image} 
            style={imageStyle}
            resizeMode="cover"
          />
        )}
        {data.isPro && (
          <View style={styles.proBadgeContainer}>
            <ProBadge size="small" />
          </View>
        )}
      </View>

      {/* İçerik */}
      <View style={contentStyle}>
        <Text style={[styles.title, isLarge ? styles.largeTitle : null]} numberOfLines={isLarge ? 2 : 1}>
          {data.title}
        </Text>
        <Text style={[styles.description, isLarge ? styles.largeDescription : null]} numberOfLines={isLarge ? 3 : 2}>
          {data.description}
        </Text>
        
        {/* Ok işareti */}
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 20,
    marginBottom: Spacing.md,
    shadowColor: Colors.cardShadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  largeCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 20,
    marginBottom: Spacing.xl,
    shadowColor: Colors.cardShadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  largeImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  proBadgeContainer: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  content: {
    padding: 16,
    minHeight: 110,
  },
  largeContent: {
    padding: 20,
    minHeight: 120,
  },
  title: {
    ...Typography.textStyles.h6,
    color: Colors.textPrimary,
    marginBottom: 6,
    fontWeight: '600',
  },
  largeTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    ...Typography.textStyles.bodySmall,
    color: Colors.textSecondary,
    flex: 1,
    marginBottom: 12,
    lineHeight: 18,
  },
  largeDescription: {
    fontSize: 16,
    lineHeight: 22,
  },
  arrowContainer: {
    alignItems: 'flex-end',
  },
  arrow: {
    fontSize: 18,
    color: Colors.textMuted,
    fontWeight: '600',
  },
}); 