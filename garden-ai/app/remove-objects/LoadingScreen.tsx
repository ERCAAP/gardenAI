import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate AI processing time
    const timer = setTimeout(() => {
      console.log('AI processing finished, navigating to ResultsScreen');
      router.replace({
        pathname: './ResultsScreen',
        params: { resultImageUri: 'placeholder_result_uri' }, // Pass a placeholder URI for the result
      });
    }, 10000); // 10 seconds as per the screenshot

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image 
          source={{ uri: 'https://placehold.co/100x100/5A9E5D/FFFFFF/png?text=Loading&font=ഘാتال' }} 
          style={styles.loaderImage} 
        />
        <Text style={styles.title}>Applying style transformation...</Text>
        <Text style={styles.subtitle}>
          The process may take about 10 seconds, please do not close the application.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  loaderImage: {
    width: 100,
    height: 100,
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