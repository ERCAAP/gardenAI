import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { MapPressEvent, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Colors, Spacing, Typography } from '../../../../src/constants';
import { LocationData, LocationStepProps } from '../types';

// Sample locations for demonstration
const sampleLocations = [
  { latitude: 41.2868, longitude: 36.3313, address: 'Tekkeköy, Samsun, Türkiye' },
  { latitude: 41.0082, longitude: 28.9784, address: 'İstanbul, Türkiye' },
  { latitude: 39.9334, longitude: 32.8597, address: 'Ankara, Türkiye' },
  { latitude: 38.4192, longitude: 27.1287, address: 'İzmir, Türkiye' },
  { latitude: 36.8969, longitude: 30.7133, address: 'Antalya, Türkiye' },
];

export const LocationStep: React.FC<LocationStepProps> = ({
  selectedLocation,
  onLocationChange
}) => {
  const [region, setRegion] = useState<Region>({
    latitude: selectedLocation.latitude,
    longitude: selectedLocation.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [isMapReady, setIsMapReady] = useState(false);
  const [locationPermission, setLocationPermission] = useState<boolean>(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  // GPS konumu al
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      setIsLoadingLocation(true);
      
      // Konum izni iste
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationPermission(false);
        Alert.alert(
          'Konum İzni', 
          'Konumunuzu almak için konum iznine ihtiyacımız var.',
          [
            { text: 'Tamam', style: 'default' }
          ]
        );
        setIsLoadingLocation(false);
        return;
      }

      setLocationPermission(true);

      // Mevcut konumu al
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;
      
      // Reverse geocoding ile adres al
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      let address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      if (reverseGeocode.length > 0) {
        const place = reverseGeocode[0];
        address = `${place.district || place.subregion || 'Unknown'}, ${place.city || place.region || 'Unknown'}, ${place.country || 'Unknown'}`;
      }

      const newLocation: LocationData = {
        latitude,
        longitude,
        address: address
      };

      const newRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

      setRegion(newRegion);
      onLocationChange(newLocation);
      
    } catch (error) {
      console.log('Konum alınamadı:', error);
      Alert.alert('Hata', 'Konumunuz alınamadı. Lütfen haritadan manuel olarak seçin.');
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleMapPress = async (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    
    try {
      // Reverse geocoding
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      let address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      if (reverseGeocode.length > 0) {
        const place = reverseGeocode[0];
        address = `${place.district || place.subregion || 'Selected Location'}, ${place.city || place.region || 'Unknown'}, ${place.country || 'Unknown'}`;
      }

      const newLocation: LocationData = {
        latitude,
        longitude,
        address: address
      };

      onLocationChange(newLocation);
      
      // Haritayı yeni konuma odakla
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } catch (error) {
      console.log('Reverse geocoding failed:', error);
      const newLocation: LocationData = {
        latitude,
        longitude,
        address: `Selected Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
      };
      onLocationChange(newLocation);
    }
  };

  const handleMarkerDragEnd = async (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    
    try {
      // Reverse geocoding
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      let address = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      if (reverseGeocode.length > 0) {
        const place = reverseGeocode[0];
        address = `${place.district || place.subregion || 'Dragged Location'}, ${place.city || place.region || 'Unknown'}, ${place.country || 'Unknown'}`;
      }

      const newLocation: LocationData = {
        latitude,
        longitude,
        address: address
      };

      onLocationChange(newLocation);
    } catch (error) {
      console.log('Reverse geocoding failed:', error);
      const newLocation: LocationData = {
        latitude,
        longitude,
        address: `Dragged Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
      };
      onLocationChange(newLocation);
    }
  };

  const handleMyLocation = () => {
    if (locationPermission) {
      getCurrentLocation();
    } else {
      Alert.alert('Konum İzni', 'Konum iznine ihtiyacımız var. Ayarlardan izin verebilirsiniz.');
    }
  };

  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Select Your Location</Text>
      <Text style={styles.stepSubtitle}>
        {isLoadingLocation 
          ? 'Konumunuz alınıyor...' 
          : 'Haritaya dokunarak veya iğneyi sürükleyerek konumunuzu seçin.'
        }
      </Text>
      
      {/* Interactive Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={region}
          region={region}
          onPress={handleMapPress}
          onMapReady={() => setIsMapReady(true)}
          showsUserLocation={locationPermission}
          showsMyLocationButton={false}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          mapType="standard"
          zoomEnabled={true}
          scrollEnabled={true}
          pitchEnabled={false}
          rotateEnabled={false}
          followsUserLocation={false}
        >
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title="Selected Location"
            description={selectedLocation.address}
            draggable={true}
            onDragStart={() => {
              console.log('Drag started');
            }}
            onDragEnd={handleMarkerDragEnd}
          >
            <View style={styles.customMarker}>
              <Ionicons name="location" size={30} color={Colors.primary} />
            </View>
          </Marker>
        </MapView>

        {/* Map Controls */}
        <TouchableOpacity 
          style={styles.myLocationButton}
          onPress={handleMyLocation}
          disabled={isLoadingLocation}
        >
          <Ionicons 
            name={isLoadingLocation ? "hourglass" : "locate"} 
            size={20} 
            color={isLoadingLocation ? Colors.textSecondary : Colors.primary} 
          />
        </TouchableOpacity>
      </View>

      {/* Selected Location Info */}
      <View style={styles.locationInfo}>
        <Text style={styles.locationLabel}>Your Location</Text>
        <View style={styles.locationCard}>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={20} color={Colors.primary} />
            <Text style={styles.locationText}>{selectedLocation.address}</Text>
          </View>
          <View style={styles.coordinatesRow}>
            <Text style={styles.coordinatesText}>
              {selectedLocation.latitude.toFixed(6)}, {selectedLocation.longitude.toFixed(6)}
            </Text>
          </View>
        </View>
      </View>

      {/* Instructions */}
      <View style={styles.instructionsCard}>
        <View style={styles.instructionRow}>
          <Ionicons name="hand-left-outline" size={16} color={Colors.secondary} />
          <Text style={styles.instructionText}>Haritaya dokunarak konum seçin</Text>
        </View>
        <View style={styles.instructionRow}>
          <Ionicons name="move-outline" size={16} color={Colors.secondary} />
          <Text style={styles.instructionText}>İğneyi tutup sürükleyerek konumu ayarlayın</Text>
        </View>
        <View style={styles.instructionRow}>
          <Ionicons name="locate-outline" size={16} color={Colors.secondary} />
          <Text style={styles.instructionText}>Sağ üst düğme ile GPS konumunuza dönün</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    padding: Spacing.lg,
  },
  stepTitle: {
    fontSize: Typography.fontSize.xl,
    fontFamily: Typography.fontFamily.bold,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  stepSubtitle: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  mapContainer: {
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: Spacing.lg,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  customMarker: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  myLocationButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: Colors.white,
    borderRadius: 25,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  locationInfo: {
    marginBottom: Spacing.lg,
  },
  locationLabel: {
    fontSize: Typography.fontSize.md,
    fontFamily: Typography.fontFamily.semiBold,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  locationCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  locationText: {
    fontSize: Typography.fontSize.base,
    fontFamily: Typography.fontFamily.medium,
    color: Colors.text,
    marginLeft: Spacing.sm,
    flex: 1,
  },
  coordinatesRow: {
    paddingLeft: Spacing.lg + Spacing.sm,
  },
  coordinatesText: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
  },
  instructionsCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: Spacing.md,
    borderLeftWidth: 3,
    borderLeftColor: Colors.secondary,
  },
  instructionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
    gap: Spacing.sm,
  },
  instructionText: {
    fontSize: Typography.fontSize.sm,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSecondary,
    flex: 1,
  },
}); 