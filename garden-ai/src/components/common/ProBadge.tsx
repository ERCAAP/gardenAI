import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { ProBadgeProps } from '../../types';

export const ProBadge: React.FC<ProBadgeProps> = ({ 
  size = 'medium',
  style 
}) => {
  const sizeStyles = {
    small: {
      paddingHorizontal: 8,
      paddingVertical: 3,
      fontSize: 12,
      borderRadius: 12,
    },
    medium: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      fontSize: 14,
      borderRadius: 16,
    },
    large: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      fontSize: 16,
      borderRadius: 20,
    },
  };

  return (
    <View style={[
      styles.container, 
      { 
        paddingHorizontal: sizeStyles[size].paddingHorizontal,
        paddingVertical: sizeStyles[size].paddingVertical,
        borderRadius: sizeStyles[size].borderRadius,
      }, 
      style
    ]}>
      <Text style={[styles.text, { fontSize: sizeStyles[size].fontSize }]}>
        ★ PRO
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.proBadge,
    alignSelf: 'flex-start',
    shadowColor: Colors.cardShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    color: Colors.proText,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
}); 