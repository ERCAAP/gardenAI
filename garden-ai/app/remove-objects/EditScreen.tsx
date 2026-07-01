import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ imageUri?: string }>();
  const imageUri = params.imageUri || 'https://via.placeholder.com/400x300.png?text=Selected+Image';

  const handleAIDoMagic = () => {
    console.log('AI processing started...');
    router.push('./LoadingScreen'); // Navigate to loading screen
  };

  const handleClose = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      // Fallback if there's no back history, e.g., navigate to remove-objects index
      router.replace('./');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.headerButton}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit</Text>
          {/* Empty TouchableOpacity for spacing, as in original design */}
          <TouchableOpacity />
        </View>

        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} resizeMode="contain" />
        ) : (
          <View style={styles.placeholderImage}>
            <Text>Selected Image Preview</Text>
          </View>
        )}

        <Text style={styles.instructions}>Erase objects and redesign your outdoor space.</Text>

        <TextInput
          style={styles.promptInput}
          placeholder="Describe what you want to change..."
          multiline
        />

        <TouchableOpacity style={styles.magicButton} onPress={handleAIDoMagic}>
          <Text style={styles.magicButtonText}>Let AI do its magic</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20, // Adjust if header is part of SafeAreaView padding
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerButton: {
    fontSize: 24,
    color: '#000',
    padding: 5, // Make it easier to tap
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  placeholderImage: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  promptInput: {
    width: '90%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  magicButton: {
    backgroundColor: '#5A9E5D', // A garden-like green
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 2,
    marginBottom: 20, // Ensure it's not cut off
  },
  magicButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 