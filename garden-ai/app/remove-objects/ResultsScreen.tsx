import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ resultImageUri?: string }>();
  const resultImageUri = params.resultImageUri || 'https://via.placeholder.com/400x500.png?text=Processed+Image';

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`);
    switch (action) {
      case 'close':
        // Navigate back to the main screen of the remove-objects feature, or further if needed.
        router.replace('./'); // Go to the index of remove-objects
        break;
      case 'save':
        // Implement save logic
        break;
      case 'share':
        // Implement share logic
        break;
      // Add like/dislike logic if needed
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => handleAction('close')} style={styles.headerButtonContainer}>
            <Text style={styles.headerButtonText}>✕</Text>
          </TouchableOpacity>
          <View style={styles.feedbackIcons}>
            <TouchableOpacity onPress={() => handleAction('dislike')} style={styles.headerButtonContainer}>
              {/* Replace with actual icon */}
              <Text style={styles.headerButtonText}>👎</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAction('like')} style={styles.headerButtonContainer}>
              {/* Replace with actual icon */}
              <Text style={styles.headerButtonText}>👍</Text>
            </TouchableOpacity>
          </View>
        </View>

        {resultImageUri ? (
          <Image source={{ uri: resultImageUri }} style={styles.resultImage} resizeMode="contain" />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={{ color: '#fff' }}>Processed Image</Text>
          </View>
        )}

        <View style={styles.footer}>
          <TouchableOpacity style={[styles.actionButton, styles.saveButton]} onPress={() => handleAction('save')}>
            {/* Replace with actual icon */}
            <Text style={styles.actionButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.shareButton]} onPress={() => handleAction('share')}>
            {/* Replace with actual icon */}
            <Text style={styles.actionButtonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000', // Dark background for result screen as per screenshot
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15, // For status bar on dark background
    paddingBottom: 10, // Added padding for better spacing
  },
  headerButtonContainer: {
    padding: 10,
  },
  headerButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  feedbackIcons: {
    flexDirection: 'row',
  },
  resultImage: {
    width: '100%',
    flex: 1, // Image takes available space
    backgroundColor: '#1c1c1c', // Slightly lighter than background for contrast if image is transparent
  },
  placeholderImage: {
    width: '100%',
    flex: 1, // Image takes available space
    backgroundColor: '#333', // Dark placeholder
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#333', // Subtle separator on dark background
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20, // Reduced padding for potentially smaller buttons
    borderRadius: 25,
    minWidth: 120, // Ensure buttons have a decent tap area
    marginHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#4A4A4A', // Darker gray for save
  },
  shareButton: {
    backgroundColor: '#007AFF', // Blue for share
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    // marginLeft: 8, // If using icons, uncomment
  },
}); 