// 🗑️ Remove Objects Feature
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Assuming you have an icon library like react-native-vector-icons
// import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

// Placeholder image URLs - replace with your actual images or local assets
const examplePhotos = [
  'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Example1',
  'https://via.placeholder.com/150/00FF00/FFFFFF?Text=Example2',
  'https://via.placeholder.com/150/0000FF/FFFFFF?Text=Example3',
  'https://via.placeholder.com/150/FFFF00/000000?Text=Example4',
];

export default function RemoveObjectsScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleUploadPress = () => {
    setModalVisible(true);
  };

  const handleSelectSource = (source: 'camera' | 'gallery') => {
    setModalVisible(false);
    // Actual image picking logic will go here
    // For now, let's assume an image is selected and navigate to EditScreen
    console.log(`Selected source: ${source}, navigating to EditScreen`);
    router.push({
      pathname: './EditScreen',
      params: { imageUri: 'placeholder_uri' }, // Pass a placeholder URI
    });
  };

  const handleCloseScreen = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      // Fallback if there's no back history, e.g., navigate to a default tab or home
      router.replace('/(tabs)'); // Assuming you have a tabs layout as root
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={handleCloseScreen}>
          {/* <Icon name="close" size={24} color="#000" /> */}
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>Erase</Text>
          <Text style={styles.subtitle}>Easily remove unwanted objects from your photos</Text>
        </View>

        <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPress}>
          {/* <Icon name="add" size={20} color="#fff" style={styles.uploadButtonIcon} /> */}
          <Text style={styles.uploadButtonText}>Upload +</Text>
        </TouchableOpacity>

        <View style={styles.examplePhotosContainer}>
          <Text style={styles.examplePhotosTitle}>Example Photos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {examplePhotos.map((uri, index) => (
              <Image key={index} source={{ uri }} style={styles.examplePhoto} />
            ))}
          </ScrollView>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Image Source</Text>
              <TouchableOpacity style={styles.modalOption} onPress={() => handleSelectSource('camera')}>
                {/* <Icon name="photo-camera" size={24} color="#007AFF" style={styles.modalOptionIcon} /> */}
                <Text style={styles.modalOptionText}>Take a photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOption} onPress={() => handleSelectSource('gallery')}>
                {/* <Icon name="photo-library" size={24} color="#007AFF" style={styles.modalOptionIcon} /> */}
                <Text style={styles.modalOptionText}>Choose from gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalOption, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={[styles.modalOptionText, styles.cancelButtonText]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0', // A light background similar to the screenshot
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20, // Adjust as needed for status bar or notch
    paddingHorizontal: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 15, // Adjust based on SafeAreaView behavior on target devices
    left: 15,
    padding: 10,
    zIndex: 1, // Ensure it's above other elements if needed
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  header: {
    alignItems: 'center',
    marginTop: 60, // Give space for close button and top elements
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  uploadButton: {
    flexDirection: 'row',
    backgroundColor: '#222', // Dark button as in screenshot
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 40,
  },
  uploadButtonIcon: {
    marginRight: 8,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  examplePhotosContainer: {
    width: '100%',
    marginBottom: 20,
  },
  examplePhotosTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    paddingLeft: 5, // Align with the start of the scrollview items
  },
  examplePhoto: {
    width: width * 0.35, // Adjust size as needed
    height: width * 0.35 * 1.2, // Adjust aspect ratio
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: '#ccc', // Placeholder background
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalOptionIcon: {
    marginRight: 15,
  },
  modalOptionText: {
    fontSize: 18,
    color: '#007AFF', // iOS blue for options
  },
  cancelButton: {
    borderBottomWidth: 0, // No border for the last item
    marginTop: 10, // Add some space before cancel
  },
  cancelButtonText: {
    color: '#FF3B30', // iOS red for cancel
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
}); 