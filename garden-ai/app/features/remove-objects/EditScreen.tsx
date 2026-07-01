import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Placeholder for navigation and image data that would be passed to this screen
// interface EditScreenProps {
//   route?: { params?: { imageUri?: string } };
//   navigation?: any; // Replace with actual navigation type
// }

export default function EditScreen(/*props: EditScreenProps*/) {
  // const imageUri = props.route?.params?.imageUri || 'https://via.placeholder.com/400x300.png?text=Selected+Image';
  // const navigation = props.navigation;

  const handleAIDoMagic = () => {
    console.log('AI processing started...');
    // navigation.navigate('LoadingScreen'); // Navigate to loading screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { /* navigation.goBack() */ }}>
          <Text style={styles.headerButton}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit</Text>
        <TouchableOpacity onPress={() => { /* Handle save/next if applicable before AI */ }}>
          {/* Potentially a Next button or similar */}
        </TouchableOpacity>
      </View>

      {/* <Image source={{ uri: imageUri }} style={styles.imagePreview} /> */}
      <View style={styles.placeholderImage}>
        <Text>Selected Image Preview</Text>
      </View>

      <Text style={styles.instructions}>Erase objects and redesign your outdoor space.</Text>
      {/* Placeholder for drawing/erase controls if needed before AI prompt */}

      <TextInput
        style={styles.promptInput}
        placeholder="Describe what you want to change..."
        multiline
      />

      <TouchableOpacity style={styles.magicButton} onPress={handleAIDoMagic}>
        <Text style={styles.magicButtonText}>Let AI do its magic</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50, // Adjust for status bar
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
  },
  magicButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 