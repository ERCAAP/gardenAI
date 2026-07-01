import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Placeholder for navigation and image data
// interface ResultsScreenProps {
//   route?: { params?: { resultImageUri?: string } };
//   navigation?: any; // Replace with actual navigation type
// }

export default function ResultsScreen(/*props: ResultsScreenProps*/) {
  // const resultImageUri = props.route?.params?.resultImageUri || 'https://via.placeholder.com/400x500.png?text=Processed+Image';
  // const navigation = props.navigation;

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`);
    // switch (action) {
    //   case 'close':
    //     // navigation.popToTop(); // Or navigate to home
    //     break;
    //   case 'save':
    //     // Implement save logic
    //     break;
    //   case 'share':
    //     // Implement share logic
    //     break;
    //   // Add like/dislike logic if needed
    // }
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

        {/* <Image source={{ uri: resultImageUri }} style={styles.resultImage} /> */}
        <View style={styles.placeholderImage}>
            <Text>Processed Image</Text>
        </View>

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
    resizeMode: 'contain',
    marginBottom: 20,
  },
  placeholderImage: {
    width: '100%',
    flex: 1, // Image takes available space
    backgroundColor: '#333', // Dark placeholder
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#333', // Subtle separator on dark background
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
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
    marginLeft: 8, // If using icons
  },
}); 