import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Colors, Spacing, Typography } from '../../../src/constants';

export default function GardenDesignScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleImagePicker = () => {
    Alert.alert(
      'Fotoğraf Seç',
      'Bahçe tasarımı için fotoğraf seçin',
      [
        { text: 'Kamera', onPress: () => console.log('Kamera açılacak') },
        { text: 'Galeri', onPress: () => console.log('Galeri açılacak') },
        { text: 'İptal', style: 'cancel' },
      ]
    );
  };

  const handleGenerateDesign = () => {
    setIsGenerating(true);
    // AI service integration will be added here
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedImage('https://via.placeholder.com/400x300/4A7C59/FFFFFF?text=AI+Generated+Garden');
    }, 3000);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Garden Design',
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: Colors.white,
          headerTitleStyle: { fontFamily: Typography.fontFamily.semiBold },
        }}
      />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          style={styles.header}
        >
          <Text style={styles.title}>🎨 AI Bahçe Tasarımı</Text>
          <Text style={styles.subtitle}>
            Fotoğrafınızı yükleyin, AI ile muhteşem bahçe tasarımları oluşturun
          </Text>
        </LinearGradient>

        <View style={styles.content}>
          {/* Image Upload Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Fotoğraf Yükleyin</Text>
            <TouchableOpacity style={styles.imageUpload} onPress={handleImagePicker}>
              {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={styles.uploadedImage} />
              ) : (
                <View style={styles.uploadPlaceholder}>
                  <Ionicons name="camera" size={48} color={Colors.gray} />
                  <Text style={styles.uploadText}>Fotoğraf Seç</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Design Options */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Tasarım Stili</Text>
            <View style={styles.styleOptions}>
              {['Modern', 'Klasik', 'Doğal', 'Minimalist'].map((style) => (
                <TouchableOpacity key={style} style={styles.styleButton}>
                  <Text style={styles.styleButtonText}>{style}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Generate Button */}
          <TouchableOpacity
            style={[styles.generateButton, !selectedImage && styles.generateButtonDisabled]}
            onPress={handleGenerateDesign}
            disabled={!selectedImage || isGenerating}
          >
            <LinearGradient
              colors={!selectedImage ? [Colors.gray, Colors.gray] : [Colors.primary, Colors.secondary]}
              style={styles.generateButtonGradient}
            >
              {isGenerating ? (
                <ActivityIndicator color={Colors.white} size="small" />
              ) : (
                <Text style={styles.generateButtonText}>AI ile Tasarım Oluştur</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Generated Result */}
          {generatedImage && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>✨ AI Tasarımınız</Text>
              <Image source={{ uri: generatedImage }} style={styles.generatedImage} />
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="download" size={20} color={Colors.primary} />
                  <Text style={styles.actionButtonText}>İndir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="share" size={20} color={Colors.primary} />
                  <Text style={styles.actionButtonText}>Paylaş</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: Spacing.lg,
    paddingTop: Spacing.xl,
  },
  title: {
    fontSize: Typography.fontSize.xl,
    fontFamily: Typography.fontFamily.bold,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  subtitle: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.white,
    textAlign: 'center',
    opacity: 0.9,
  },
  content: {
    padding: Spacing.lg,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: Typography.fontSize.lg,
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  imageUpload: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.border,
    borderStyle: 'dashed',
  },
  uploadPlaceholder: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },
  uploadedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  uploadText: {
    fontSize: Typography.fontSize.md,
    fontFamily: Typography.fontFamily.medium,
    color: Colors.gray,
    marginTop: Spacing.sm,
  },
  styleOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  styleButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  styleButtonText: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.medium,
    color: Colors.text,
  },
  generateButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: Spacing.lg,
  },
  generateButtonDisabled: {
    opacity: 0.5,
  },
  generateButtonGradient: {
    paddingVertical: Spacing.md,
    alignItems: 'center',
  },
  generateButtonText: {
    fontSize: Typography.fontSize.md,
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.white,
  },
  generatedImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: Spacing.md,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  actionButtonText: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.medium,
    color: Colors.primary,
    marginLeft: Spacing.xs,
  },
}); 