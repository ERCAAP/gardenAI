import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// For image picker, you would typically use a library like react-native-image-picker
// import ImagePicker from 'react-native-image-picker';

interface UploadScreenProps {
  onImageUploaded: (imageUri: string) => void;
}

const examplePhotos = [
  // Replace with your actual example photo paths or URIs
  { id: '1', uri: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Example1' },
  { id: '2', uri: 'https://via.placeholder.com/150/00FF00/FFFFFF?Text=Example2' },
  { id: '3', uri: 'https://via.placeholder.com/150/0000FF/FFFFFF?Text=Example3' },
];

export default function UploadScreen({ onImageUploaded }: UploadScreenProps) {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleTakePhoto = () => {
    setModalVisible(false);
    // TODO: Implement take photo logic
    // Example: ImagePicker.launchCamera({}, response => { ... onImageUploaded(response.uri) ... });
    console.log('Take Photo');
    // For demonstration, immediately call onImageUploaded with a placeholder
    onImageUploaded('https://via.placeholder.com/300/CCCCCC/FFFFFF?Text=New+Photo');
  };

  const handleChooseFromGallery = () => {
    setModalVisible(false);
    // TODO: Implement choose from gallery logic
    // Example: ImagePicker.launchImageLibrary({}, response => { ... onImageUploaded(response.uri) ... });
    console.log('Choose from Gallery');
    // For demonstration, immediately call onImageUploaded with a placeholder
    onImageUploaded('https://via.placeholder.com/300/DDDDDD/FFFFFF?Text=Gallery+Image');
  };
  
  const handleSelectExample = (uri: string) => {
    onImageUploaded(uri);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('replaceObjects.title')}</Text>
        <Text style={styles.subtitle}>{t('replaceObjects.subtitle')}</Text>
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={() => setModalVisible(true)}>
        <Icon name="add-circle-outline" size={24} color="#fff" />
        <Text style={styles.uploadButtonText}>{t('replaceObjects.buttons.upload')}</Text>
      </TouchableOpacity>

      <Text style={styles.examplePhotosTitle}>{t('replaceObjects.examplePhotos')}</Text>
      <FlatList
        data={examplePhotos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectExample(item.uri)}>
            <Image source={{ uri: item.uri }} style={styles.exampleImage} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.examplePhotosList}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.modalButton} onPress={handleTakePhoto}>
              <Icon name="camera-outline" size={24} color="#333" />
              <Text style={styles.modalButtonText}>{t('replaceObjects.upload.takePhoto')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleChooseFromGallery}>
              <Icon name="images-outline" size={24} color="#333" />
              <Text style={styles.modalButtonText}>{t('replaceObjects.upload.chooseFromGallery')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={[styles.modalButtonText, styles.cancelButtonText]}>{t('replaceObjects.upload.cancel')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  uploadButton: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 30,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  examplePhotosTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  examplePhotosList: {
    width: '100%',
    maxHeight: 120, 
  },
  exampleImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalButtonText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 15,
  },
  cancelButton: {
    borderBottomWidth: 0,
    marginTop: 10,
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  cancelButtonText: {
    color: '#FF3B30', 
    fontWeight: 'bold',
    marginLeft: 0,
  },
}); 