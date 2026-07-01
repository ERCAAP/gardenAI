import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Placeholder for navigation
// interface LoadingScreenProps {
//   navigation?: any; // Replace with actual navigation type
// }

export default function LoadingScreen(/*props: LoadingScreenProps*/) {
  // const navigation = props.navigation;

  useEffect(() => {
    // Simulate AI processing time
    const timer = setTimeout(() => {
      console.log('AI processing finished, navigating to ResultsScreen (placeholder)');
      // navigation.replace('ResultsScreen', { resultImageUri: 'placeholder_result_uri' });
    }, 10000); // 10 seconds as per the screenshot

    return () => clearTimeout(timer);
  }, [/*navigation*/]);

  return (
    <View style={styles.container}>
      {/* You can use an ActivityIndicator or a custom animation/image */}
      {/* <ActivityIndicator size="large" color="#5A9E5D" /> */}
      <Text style={styles.title}>Applying style transformation...</Text>
      <Text style={styles.subtitle}>
        The process may take about 10 seconds, please do not close the application.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  loaderImage: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
}); 