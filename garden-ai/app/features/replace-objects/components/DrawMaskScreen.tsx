import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, PanResponder, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// For drawing on the image, you might use a library like react-native-sketch-canvas
// or implement it using react-native-svg for more control.

interface DrawMaskScreenProps {
  imageUri: string;
  onMaskingComplete: (maskedImageUri: string, prompt: string) => void;
  onClose: () => void;
}

const { width: screenWidth } = Dimensions.get('window');

export default function DrawMaskScreen({ imageUri, onMaskingComplete, onClose }: DrawMaskScreenProps) {
  const { t } = useTranslation();
  const [prompt, setPrompt] = useState('');
  const [paths, setPaths] = useState<Array<{ path: string, color: string, strokeWidth: number }>>([]);
  const currentPath = useRef<string[]>([]);

  // This is a simplified drawing implementation. 
  // For a real app, a dedicated drawing library would be better.
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        currentPath.current = [];
      },
      onPanResponderMove: (event, gestureState) => {
        // For simplicity, we are not actually drawing. 
        // This would involve capturing points and re-rendering an SVG or canvas element.
        // console.log(gestureState.moveX, gestureState.moveY);
        const x = gestureState.moveX;
        const y = gestureState.moveY;
        // This is a placeholder to simulate path updates for the visual effect
        // In a real scenario, you would update an SVG path string here.
        currentPath.current.push(`${x},${y}`); 
      },
      onPanResponderRelease: () => {
        // Here, you would finalize the path and add it to the paths state
        // For now, we'll just log it and simulate a mask.
        console.log('Path drawn (simulated)', currentPath.current.join(' '));
        // Simulate a mask being drawn by adding a dummy path
        // In a real app, this would be a path from user drawing.
        // The "mask" here is not visually represented on the image for simplicity.
        setPaths(prevPaths => [...prevPaths, { path: 'M10 10 H 90 V 90 H 10 L 10 10', color: 'rgba(255, 255, 0, 0.5)', strokeWidth: 20}]);
        currentPath.current = [];
      },
    })
  ).current;

  const handleContinue = () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt.');
      return;
    }
    // In a real app, you would take a snapshot of the image with the mask
    // For now, we pass the original image URI and the prompt
    console.log('Masks drawn:', paths.length); 
    onMaskingComplete(imageUri, prompt); // Pass original image as a placeholder for masked image
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Icon name="close-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{t('replaceObjects.drawMask.title')}</Text>
        <View style={{width: 30}} />{/* Spacer */}
      </View>

      <View style={styles.imageContainer} {...panResponder.panHandlers}>
        <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
        {/* 
          Here you would render the drawing. For example, using react-native-svg:
          <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
            {paths.map((p, index) => (
              <Path
                key={index}
                d={p.path}
                stroke={p.color} // Example: 'rgba(255, 255, 0, 0.5)'
                strokeWidth={p.strokeWidth} // Example: 20
                fill="none"
              />
            ))}
          </Svg>
          The white area in the user's image is a placeholder for this drawing canvas.
        */}
         {paths.length > 0 && (
          <View style={styles.simulatedMask} />
        )}
      </View>

      <View style={styles.promptContainer}>
        <Text style={styles.promptLabel}>{t('replaceObjects.drawMask.enterPrompt')}</Text>
        <TextInput
          style={styles.promptInput}
          placeholder={t('replaceObjects.drawMask.promptPlaceholder')}
          value={prompt}
          onChangeText={setPrompt}
        />
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>{t('replaceObjects.buttons.continue')}</Text>
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
  closeButton: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    overflow: 'hidden', // Important for drawing boundaries
    position: 'relative', // For absolute positioning of the mask/drawing
  },
  image: {
    width: screenWidth - 40, // Give some padding
    height: screenWidth - 40, // Make it square-ish or adjust as needed
    // The actual drawing canvas would be absolutely positioned on top of this
  },
  simulatedMask: {
    position: 'absolute',
    top: '25%', // Example position
    left: '25%', // Example position
    width: '50%', // Example size
    height: '50%', // Example size
    backgroundColor: 'rgba(255, 255, 0, 0.4)', // Semi-transparent yellow
    borderRadius: 20, // Example shape
  },
  promptContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  promptLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  promptInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 