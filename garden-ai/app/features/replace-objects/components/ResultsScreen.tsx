import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ResultsScreenProps {
  imageUri: string;
  onSave: () => void;
  onShare: () => void;
  onClose: () => void;
  onLike: () => void;
  onDislike: () => void;
}

const { width: screenWidth } = Dimensions.get('window');

export default function ResultsScreen({
  imageUri,
  onSave,
  onShare,
  onClose,
  onLike,
  onDislike,
}: ResultsScreenProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.headerButton}>
          <Icon name="close-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{t('replaceObjects.results.title')}</Text>
        <View style={styles.feedbackIcons}>
          <TouchableOpacity onPress={onLike} style={styles.headerButton_feedbackRight}>
            <Icon name="thumbs-up-outline" size={28} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDislike} style={styles.headerButton_feedbackLeft}>
            <Icon name="thumbs-down-outline" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={onSave}>
          <Icon name="download-outline" size={22} color="#fff" />
          <Text style={styles.buttonText}>{t('replaceObjects.buttons.save')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.shareButton]} onPress={onShare}>
          <Icon name="share-social-outline" size={22} color="#fff" />
          <Text style={styles.buttonText}>{t('replaceObjects.buttons.share')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 50, // Adjust for status bar height
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerButton: {
    padding: 5,
  },
   headerButton_feedbackRight: {
    padding: 5,
    marginRight:10,
  },
  headerButton_feedbackLeft: {
    padding: 5,
  },
  feedbackIcons: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    //flex: 1, // Allow title to take available space if needed
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: screenWidth - 20, // Give some padding
    height: screenWidth - 20, // Make it square-ish or adjust as needed
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  shareButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
}); 